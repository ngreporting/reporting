import { NOOP } from '../actions/index.js'
import { combineReducers } from 'redux'
import {loginHandlers, reportsHandlers} from './handlers.js'

function dispatchReducer(handlers) {
    return (state, action) => {
        var handler = handlers[action.type] || handlers[NOOP]
        if (handler) {
            return handler(state, action)
        } else {
            return state || {}
        }
    }
}

const RootReducer = combineReducers({
  login: dispatchReducer(loginHandlers),
  reports: dispatchReducer(reportsHandlers)
})

export default RootReducer
