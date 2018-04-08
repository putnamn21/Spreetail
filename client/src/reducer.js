import { handleActions } from 'redux-actions'
import commonReducers from '../../common/reducer'
import constants from './constants'
import update from 'immutability-helper'

const selectUser = (state, { payload }) => update(state, {
  currentUser: {$set: payload}
})

const changeFilter = (state, { payload }) => update(state, {
  filters: {
    selected: {$set: payload}
  }
})

export default handleActions({
  ...commonReducers,
  [constants.CHANGE_FILTER]: changeFilter,
  [constants.SELECT_USER]: selectUser
}, {})
