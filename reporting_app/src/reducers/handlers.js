/**
 * action handlers.
 */

import {
  SIGNED_IN, REPORTS_CHANGED, ADD_REPORT, THREAD_CHANGED, MESSAGE_CHANGED,
  ADD_MESSAGE, USER_CHANGED, ATTACHEMENT_CHANGED, ADD_ATTACHMENT
} from '../actions'

const defaultLogin = {
  uid: null,
  loggedIn: false
}

export const
loginHandlers = {
  SIGNED_IN: (state, action) => {
    return {
      uid: action.uid,
      loggedIn: true
    }
  },
  NOOP: (state, action) => (state || defaultLogin)
},
reportsHandlers = {
  REPORTS_CHANGED: (state, action) => {
    return Object.assign({}, state, action.reports)
  },
  ADD_REPORT: {
    // TODO
  }
}