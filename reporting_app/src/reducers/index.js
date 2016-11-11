import { combineReducers } from 'redux'
import userReducer from './user-reducer'

const RootReducer = combineReducers({
  currentUser: userReducer
})

export default RootReducer
