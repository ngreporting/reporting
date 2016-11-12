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
    createEditor(email, password, editor) {
        this._register(email, password, editor)
    }

    constructor (email, password, config) {
        if (!instance) {
            this.config = Object.assign({}, emptyConfig, config)
            this.firebase = firebase.initializeApp(config)
            this.user = {
                email: username,
                password: password,
                loggedIn: false
            }
            this.afterLogin = []
            instance = this
        } else if (email !== undefined || password !==undefined || config !== undefined) {
            console.log('Reporting Client already initialized. Ignoring new user and config.')
        }
        return instance
    }

    version () {
        return '0.1'
    }

    _subscribe (currentUser) {
        this.firebase.database().ref('users/' + currentUser.uid).on('value', (snapshot) => {
            this.user = Object.assign(snapshot.val(), {
                uid: currentUser.uid,
                email: this.user.email,
                password: this.user.email,
                loggedIn: true
            })
        }).then(() => {
            this.afterLogin.map((fn) => { fn() })
            this.afterLogin = []
        })
    }

    _register (email, password, data = {}) {
        this.firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            this.user.uid = user.uid
            data = Object.assign({}, data, {exists: true})
            return this.firebase.database().ref('users/' + current.uid).set(data)
        })
        .then(this._subscribe.bind(this, this.user))
        .catch(console.log)
    }

    login () {
        this.firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(this._subscribe.bind(this, `user-${this.user.email}@${this.config.domain}`))
        .catch(this._register.bind(this))
    }

    _delay (fn) {
        if (!this.user.loggedIn) {
            this.login()
            this.afterLogin.push(fn)
            return true
        }
        return false
    }

    // Calls cb with all reports visible to the logged in user (all reports
    // for journalists, own reports for any one else). Returns a function to
    // cancle monitoring.
    monitorReports (cb) {
        if (_delay(this.monitorReports.bind(this, cb))) {
            return
        }
        const ref = this.firebase.database.ref('reports')
        const listener = ref.orderByChild(author).equalTo(this.user.uid).on('value', (snapshot) => {
            cb(snapshot.val())
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
        if (_delay(this.monitorThread.bind(this, thread, cb))) {
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
        if (_delay(this.monitorMessage.bind(this, message, cb))) {
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
        if (_delay(this.monitorReport.bind(this, report, cb))) {
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
        if (_delay(this.monitorUser.bind(this, user, cb))) {
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
        if (_delay(this.addMessage.bind(this, thread, text))) {
            return
        }
        // todo
        return 'newKey'
    }

    // Add new report. Returns uid
    addReport(report) {
         if (_delay(this.addReport.bind(this, report))) {
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
        if (_delay(this.uploadAttachment.bind(this, data, extension, progressCb, successCb))) {
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
        if (_delay(this.updateReport.bind(this, uid, report))) {
            return
        }
        //todo
    }

    updateMessage(uid, message) {
        if (_delay(this.updateMessage.bind(this, uid, message))) {
            return
        }
        //todo
    }
}

module.exports = ReportingClient
