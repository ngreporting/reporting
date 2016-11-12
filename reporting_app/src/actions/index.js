export const NOOP = 'NOOP'

export const NOOP = 'NOOP',
    SIGNED_IN = 'SIGNED_IN',
    REPORTS_CHANGED = 'REPORTS_CHANGED',
    ADD_REPORT = 'ADD_REPORT',
    THREAD_CHANGED = 'THREAD_CHANGED',
    MESSAGE_CHANGED = 'MESSAGE_CHANGED',
    ADD_MESSAGE = 'ADD_MESSAGE',
    USER_CHANGED = 'USER_CHANGED',
    ATTACHEMENT_CHANGED = 'ATTACHEMENT_CHANGED',
    ADD_ATTACHMENT = 'ADD_ATTACHMENT',
    ADD_MESSAGE = 'ADD_MESSAGE'

function signedIn (uid) {
  return {
    type: SIGNED_IN,
    uid: uid
  }
}

function reportsChanged(reports) {
    return {
        type: REPORTS_CHANGED,
        reports: reports
    }
}

function addReport(report) {
    return {
        type: ADD_REPORT,
        report: report
    }
}

function threadChanged(thread) {
    return {
        type: THREAD_CHANGED,
        thread: thread
    }
}

function messageChanged(message) {
    return {
        type: MESSAGE_CHANGED,
        message: message
    }
}

function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

function userChanged(user) {
    return {
        type: USER_CHANGED,
        user: user
    }
}

function attachmentChanged(attachment) {
    return {
        type: ATTACHEMENT_CHANGED,
        attachment: attachment
    }
}

function addAttachment(attachment) {
    return {
        type: ADD_ATTACHMENT,
        attachment: attachment
    }
}

function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message: message
    }
}

export {signedIn, reportsChanged, addReport, threadChanged, messageChanged,
addMessage, userChanged, attachmentChanged, addAttachment, addMessage}
