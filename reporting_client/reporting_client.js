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

    // Calls cb with all reports visible to the logged in user (all reports
    // for journalists, own reports for any one else). Returns a function to
    // cancle monitoring.
    monitorReports (cb) {
        if (this._delay(this.monitorReports.bind(this, cb))) {
            return
        }
        const ref = this.firebase.database().ref('reports')
        const listener = ref.orderByChild('author').equalTo(this.user.uid).on('value', (snapshot) => {
            console.log('recieved reports: ', JSON.stringify(snapshot.val()));
            cb(snapshot.val() || {})
        })
        // setTimeout(()=>{
        //     cb({
        //         'rep1': {
        //             text: 'Toller Bericht',
        //             author: 'anon1',
        //             date: 1478905163895,
        //             attachments: ['a', 'b'],
        //             position: {
        //                 lat: 55.0,
        //                 lng: 40.0
        //             }
        //         },
        //         'rep2': {
        //             text: 'Toller Bericht 2',
        //             author: 'anon1',
        //             date: 1478907163895,
        //             position: {
        //                 lat: 55.0,
        //                 lng: 40.0
        //             },
        //             threads: ['a', 'b']
        //         },
        //         'rep3': {
        //             text: 'Toller Bericht 3',
        //             author: 'anon1',
        //             date: 1478908163895,
        //             attachments: ['c']
        //         }
        //     })
        // }, 20)
        return () => {
            ref.off(listener)
        }
    }

    // Calls cb for every change of the given thread. Returns a function to
    // cancle monitoring.
    monitorThread(thread, cb) {
        if (this._delay(this.monitorThread.bind(this, thread, cb))) {
            return
        }
        setTimeout(()=>{
            cb({
                report: 'rep2',
                responder: 'user1',
                messages: ['mes1', 'mes2']
            })
        }, 20)
        return () => {}
    }

    // Calls cb for every change of the given message. Returns a function to
    // cancle monitoring.
    monitorMessage(message, cb) {
        if (this._delay(this.monitorMessage.bind(this, message, cb))) {
            return
        }
        setTimeout(()=>{
            cb({
                text: 'nachfrage',
                author: (message == 'mes2') ? 'anon1' : 'user1',
                date: 1478909163895
            })
        }, 20)
        return () => {}
    }

    // Monitor specific report. Returns a function to
    // cancle monitoring.
    monitorReport(report, cb) {
        if (this._delay(this.monitorReport.bind(this, report, cb))) {
            return
        }
        setTimeout(()=>{
            cb({
                [report]: {
                    text: 'Toller Bericht',
                    author: 'anon1',
                    date: 1478905163895,
                    attachments: ['a', 'b'],
                    position: {
                        lat: 55.0,
                        lng: 40.0
                    }
                }
            })
        }, 20)
        return () => {}
    }

    // Register change handler for changes on given user
    monitorUser(user, cb) {
        if (this._delay(this.monitorUser.bind(this, user, cb))) {
            return
        }
        setTimeout(()=>{
            cb({
                [user]: {
                    name: 'Mike Müller',
                    organization: 'SWR'
                }
            })
        }, 20)
        return () => {}
    }

    // Add new message to thred. Returns new uid.
    addMessage(thread, text) {
        if (this._delay(this.addMessage.bind(this, thread, text))) {
            return
        }
        // todo
        return 'newKey'
    }

    // Add new report. Returns uid
    addReport(report) {
         if (this._delay(this.addReport.bind(this, report))) {
            return
        }
        // todo
        return 'newReport'
    }

    // Upload attachment with base64 encoded data and given extension
    // (e.g. 'jpg')
    // Calls progressCb multiple times with one parameter between 0.0 ans 1.0
    // Calls successCb one time with download URL as parameter
    uploadAttachment(data, extension, progressCb, successCb) {
        if (this._delay(this.uploadAttachment.bind(this, data, extension, progressCb, successCb))) {
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

    //
    updateReport(uid, report) {
        if (this._delay(this.updateReport.bind(this, uid, report))) {
            return
        }
        //todo
    }

    updateMessage(uid, message) {
        if (this._delay(this.updateMessage.bind(this, uid, message))) {
            return
        }
        //todo
    }
}

module.exports = ReportingClient
