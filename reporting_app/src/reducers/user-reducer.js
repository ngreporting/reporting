/**
 * reducer to get/set information about current user
 */

import { SIGNEDIN } from '../actions'

const defaultUser = {
  uid: null,
  status: {
    self: {
      providerCollected: 0,
      usersActivated: 0
    }
  },
  activatedBy: null,
  signInStatus: false
}

export default (state = defaultUser, action) => {
  switch (action.type) {
    case SIGNEDIN:
      const {
        uid, activatedBy, status
      } = action.payload
      const signInState = {
        uid,
        activatedBy,
        signInStatus: true,
        status
      }
      return signInState

    default:
      return state
  }
}
