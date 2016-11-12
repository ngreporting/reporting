import config from 'config.js'
import randomBytes from 'react-native-randombytes'

function version() {
  return '0.1'
}

var instance

class ReportingClient {

    constructor () {
        if (!instance) {
            // this.firebase = firebase.initializeApp(config)
            // this.currentUser = Object.assign({}, emptyUser)
            instance = this
        }
        return instance
    }

    _subscribe = (currentUser) => {
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

    // Register change handler for changes in users reports. Will be called
    // multiple times.
    getReports (cb) {
        setTimeout(()=>{
            cb({
                'rep1': {
                    text: 'Toller Bericht',
                    author: 'anon1'
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
                }
                'rep3': {
                    text: 'Toller Bericht 3',
                    author: 'anon1',
                    date: 1478908163895,
                    attachments: ['c']
                }
            })
        }, 20)
    }

    // Register change handler for changes on given thread
    onThreadChange(thread, cb) {
        setTimeout(()=>{
            cb({
                [thread]: {
                    report: 'rep2',
                    responder: 'user1'
                    messages: ['mes1', 'mes2']
            })
        }, 20)
    }

    // Register change handler for changes on given message
    onMessageChange(message, cb) {
        setTimeout(()=>{
            cb({
                [message]: {
                    text: 'nachfrage',
                    author: (message == 'mes2') ? 'anon1' : 'user1',
                    date: 1478909163895
                }
            })
        }, 20)
    }

    // Register change handler for changes on given user
    onUserChange(user, cb) {
        setTimeout(()=>{
            cb({
                [user]: {
                    name: 'Mike Müller',
                    organization: 'SWR'
                }
            })
        }, 20)
    }

    onAttachmentChange(attachment, cb) {
        setTimeout(()=>{
            cb({
                [attachment]: {
                    type: 'image/jpg',
                    url: 'https://source.unsplash.com/random'
                }
            })
        }, 20)
    }

    // Add report. Returns new ID
    addReport(report) {
        // TODO
        return 'newRep'
    }

    // Add attachment. Returns new ID
    addAttachment(attachment) {
        return 'newAttachment'
    }

    // Add message to thread. Returns new ID
    addMessage(thread, message) {
        return 'newMsg'
    }
}

export { version }