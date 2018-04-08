import { handleActions } from 'redux-actions'
import commonReducers from '../../common/reducer'
import constants from './constants'

const initialState = {
  users: [],
  tasks: [],
  currentUser: null
}

const selectUser = (state, payload) => {
  console.log(payload)
  return state
}

export default handleActions({
  ...commonReducers,
  [constants.SELECT_USER]: selectUser
}, initialState)
