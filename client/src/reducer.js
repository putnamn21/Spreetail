import { handleActions } from 'redux-actions'
import commonReducers from '../../common/reducer'
import constants from './constants'
import update from 'immutability-helper'

const selectUser = (state, { payload }) => update(state, {
  currentUser: {$set: payload}
})

export default handleActions({
  ...commonReducers,
  [constants.SELECT_USER]: selectUser
}, {})
