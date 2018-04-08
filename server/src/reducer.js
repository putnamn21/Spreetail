import { handleActions } from 'redux-actions'
import commonReducers from '../../common/reducer'
import initialState from '../initialState.json'
import constants from './constants'

const selectUser = (state, payload) => {
  console.log(payload)
  return state
}

export default handleActions({
  ...commonReducers,
  [constants.SELECT_USER]: selectUser
}, initialState)
