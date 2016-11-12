/**
 * reducer to get/set information about current user
 */

import { SIGNEDIN } from '../actions'

const defaultUser = {
  uid: null
  loggedIn: false
}

export default {
  SIGNED_IN: (state, action) => {
    uid: action.uid,
    loggedIn: true
  },
  NOOP: () => defaultUser
}