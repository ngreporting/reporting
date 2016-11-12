var instance

class ReportingClient {

    constructor (username, password, config) {
        if (!instance) {
            // this.firebase = firebase.initializeApp(config)
            // this.currentUser = Object.assign({}, emptyUser)
            instance = this
        }
        return instance
    }

    version () {
        return '0.1'
    }

    _subscribe (currentUser) {
        // this.firebase.database().ref('users/' + currentUser.uid).on('value', (snapshot) => {
            // this.currentUser = Object.assign({}, emptyUser, {uid: currentUser.uid}, snapshot.val())
            // this.actions.signedIn(this.currentUser)
        // })
    }

    _register () {
        // var currentUser
        // randomBytes(16)
        // .then(bytes => {
        //     const username = `user-${uuid.v4()}@findeckapp.com`
        //     const password = bytes.toString('base64')
        //     Keychain.setGenericPassword(username, password)
        //     return Keychain.getGenericPassword()
        // })
        // .then(({ username, password }) => {
        //     return this.firebase.auth().createUserWithEmailAndPassword(username, password)
        // })
        // .then((cu) => {
        //     currentUser = cu
        //     console.log('THIS IS RUN')
        //     return this.firebase.database().ref('users/' + currentUser.uid + '/exists').set(true)
        // })
        // .then(() => {
        //     this._subscribe(currentUser)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    login () {
        // Keychain.getGenericPassword()
        // .then(({ username, password }) => {
        //     return this.firebase.auth().signInWithEmailAndPassword(username, password)
        // })
        // .then(this._subscribe)
        // .catch(() => {
        //     this._register()
        // })
    }

    // Calls cb with all reports visible to the logged in user (all reports
    // for journalists, own reports for any one else). Returns a function to
    // cancle monitoring.
    monitorReports (cb) {
        setTimeout(()=>{
            cb({
                'rep1': {
                    text: 'Toller Bericht',
                    author: 'anon1',
                    date: 1478905163895,
                    attachments: ['a', 'b'],
                    position: {
                        lat: 55.0,
                        lng: 40.0
                    }
                },
                'rep2': {
                    text: 'Toller Bericht 2',
                    author: 'anon1',
                    date: 1478907163895,
                    position: {
                        lat: 55.0,
                        lng: 40.0
                    },
                    threads: ['a', 'b']
                },
                'rep3': {
                    text: 'Toller Bericht 3',
                    author: 'anon1',
                    date: 1478908163895,
                    attachments: ['c']
                }
            })
        }, 20)
        return () => {}
    }

    // Calls cb for every change of the given thread. Returns a function to
    // cancle monitoring.
    monitorThread(thread, cb) {
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
        // todo
        return 'newKey'
    }

    // Add new report. Returns uid
    addReport(report) {
        // todo
        return 'newReport'
    }

    // Upload attachment with base64 encoded data and given extension
    // (e.g. 'jpg')
    // Calls progressCb multiple times with one parameter between 0.0 ans 1.0
    // Calls successCb one time with download URL as parameter
    uploadAttachment(data, extension, progressCb, successCb) {
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
        //todo
    }

    updateMessage(uid, message) {
        //todo
    }
}

module.exports = ReportingClient
