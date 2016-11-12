import { NOOP } from '../actions/index.js'
import { combineReducers } from 'redux'
import userReducer from './user-handler'

function dispatchReducer(handlers) {
    return (state, action) => {
        var handler = handlers[action.type] || handlers[NOOP]
        return handler(state, action)
    }
}

const RootReducer = combineReducers({
  currentUser: dispatchReducer(userHandler)
})

export default RootReducer
