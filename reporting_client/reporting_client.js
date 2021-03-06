var firebase = require('firebase')

const emptyConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    domain: ''
}

var instance

class ReportingClient {

    constructor (config) {
        if (!instance) {
            this.config = Object.assign({}, emptyConfig, config)
            this.firebase = firebase.initializeApp(this.config.firebase)
            this.user = {
                loggedIn: false
            }
            this.afterLogin = []
            instance = this
        } else if (config !== undefined) {
            console.log('Reporting Client already initialized. Ignoring new user and config.')
        }
        return instance
    }

    version () {
        return '0.1'
    }

    login (email, password, create = true) {
        Object.assign(this.user, {
            email: email,
            password: password
        })
        console.log('Logging in with: ', JSON.stringify(this.user));
        this.firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this._subscribe.bind(this))
        .catch((error) => {
            console.log('Failes to log in. Registering.');
            if (create) {
                this._register()
            } else {
                console.log(error)
            }
        })
    }

    _register () {
        console.log('Lets register: ', JSON.stringify(this.user));
        this.firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
            this.user = Object.assign({}, this.user, {
                uid: user.uid
            })
            var data = Object.assign({}, {exists: true})
            return this.firebase.database().ref('users/' + this.user.uid).set(data)
        })
        .then(this._subscribe.bind(this, this.user))
        .catch(console.log)
    }

    _subscribe (currentUser) {
        console.log('Subscribing to user: ', this.user, currentUser);
        this.firebase.database().ref('users/' + currentUser.uid).on('value', (snapshot) => {
            console.log('Recieved user: ', JSON.stringify(snapshot.val()));
            Object.assign(this.user, snapshot.val(), {
                uid: currentUser.uid,
                email: this.user.email,
                password: this.user.password,
                loggedIn: true
            })
            this.afterLogin.map((fn) => { fn() })
            this.afterLogin = []
        })
    }

    anonymousEmail (user) {
        return `user-${user}@${this.config.domain}`
    }

    promoteToEditor(editor) {
        this.firebase.database().ref('users/' + this.user.uid).update(editor)
    }

    _delay (fn) {
        if (!this.user.loggedIn) {
            this.afterLogin.push(fn)
            return true
        }
        return false
    }

    _monitor(path, cb, query = ref => ref) {
        if (this._delay(this._monitor.bind(this, path, cb, query))) {
            return
        }
        const ref = this.firebase.database().ref(path)
        const listener = query(ref).on('value', (snapshot) => {
            console.log(`New value for ${path}: ` + JSON.stringify(snapshot.val()))
            cb(snapshot.val() || {})
        })
        return ref.off.bind(ref, 'value', listener)
    }

    _isEditor() {
        return !!this.user.organization
    }

    // Calls cb with all reports visible to the logged in user (all reports
    // for journalists, own reports for any one else). Returns a function to
    // cancle monitoring.
    monitorReports (cb) {
        var queryFn = (ref) => {
            return this._isEditor() ?
                ref.orderByChild('threads').equalTo(null) :
                ref.orderByChild('author').equalTo(this.user.uid)
        }
        return this._monitor('reports', (reports) => {
            cb(Object.keys(reports).sort().map(key => Object.assign(reports[key], {uid: key})))
        }, queryFn)
    }

    monitorThreads(cb) {
        return this._monitor('threads', (threads) => {
            cb(Object.keys(threads).sort().map(key => Object.assign(threads[key], {uid: key})))
        }, ref => ref.orderByChild('responder').equalTo(this.user.uid))
    }

    // Calls cb for every change of the given thread. Returns a function to
    // cancle monitoring.
    monitorThread(thread, cb) {
        return this._monitor(`threads/${thread}`, cb)
    }

    // Calls cb for every change of the given message. Returns a function to
    // cancle monitoring.
    monitorMessage(message, cb) {
        return this._monitor(`messages/${message}`, cb)
    }

    // Monitor specific report. Returns a function to
    // cancle monitoring.
    monitorReport(report, cb) {
        return this._monitor(`reports/${report}`, cb)
    }

    // Register change handler for changes on given user
    monitorUser(user, cb) {
        return this._monitor(`users/${user}`, cb)
    }

    // Add new message to thred. Returns new uid.
    addMessage(thread, text, ref = this.firebase.database().ref('messages').push()) {
        if (this._delay(this.addMessage.bind(this, thread, text, ref))) {
            return ref.key
        }
        ref.set({
            author: this.user.uid,
            date: Date.now(),
            text: text,
            thread: thread
        }).then(() => {
            this.firebase.database().ref(`threads/${thread}/messages`).push(ref.key)
        })
        return ref
    }

    // Add new report. Returns uid
    addReport(report, ref = this.firebase.database().ref('reports').push()) {
        if (this._delay(this.addReport.bind(this, report, ref))) {
            return ref.key
        }
        ref.set(Object.assign({}, report, {
            author: this.user.uid,
            date: Date.now()
        }))
        return ref.key
    }

    // Add new thread. Returns uid
    addThread(report, initialMessage, ref = this.firebase.database().ref('threads').push()) {
        if (this._delay(this.addThread.bind(this, report, initialMessage, ref))) {
            return ref.key
        }
        ref.set({
            responder: this.user.uid,
            report: report
        }).then(() => {
            const message = this.addMessage(ref.key, initialMessage)
            this.firebase.database().ref(`threads/${ref.key}/messages`).push(message)
            this.firebase.database().ref(`reports/${report}/threads`).push(ref.key)
        })
        return ref.key
    }

    // Upload attachment with base64 encoded data and given mimetype
    // (e.g. 'jpg')
    // Calls progressCb multiple times with one parameter between 0.0 ans 1.0
    // Calls successCb one time with download URL as parameter
    uploadAttachment(data, mimetype, progressCb, successCb) {
        if (this._delay(this.uploadAttachment.bind(this, data, mimetype, progressCb, successCb))) {
            return
        }
        var counter = 5
        var intv = setInterval(() => {
            progressCb(1.0 - (counter * 0.2))
            counter -= 1
            if (counter < 0) {
                clearInterval(intv)
            }
        }, 1000)
        setTimeout(() => {
            progressCb(1.0)
            successCb('https://source.unsplash.com/random')
        }, 5500)
    }

    _update(path, val) {
        if (this._delay(this._update.bind(this, path, val))) {
            return
        }
        this.firebase.database().ref(path).update(val)
    }

    //
    updateReport(uid, report) {
        this._update(`reports/${uid}`, report)
    }

    updateMessage(uid, message) {
        this._update(`messages/${uid}`, message)
    }
}

module.exports = ReportingClient
