import { handleActions } from 'redux-actions'
import commonReducers from '../../common/reducer'
import initialState from '../initialState.json'
import constants from './constants'
import update from 'immutability-helper'
import { findIndex } from 'lodash'

const selectUser = (state, {payload, meta}) => update(state, {
  users: {
    [payload]: {
      isActive: {$set: true},
      socketId: {$set: meta.socketId}
    }
  }
})

const unselectUser = (state, {payload}) => {

  const index = findIndex(state.users, {socketId: payload})
  if( index > -1){
    return update(state, {
      users: {
        [index]: {
          isActive: {$set: false},
          socketId: {$set: null}
        }
      }
    })
  } else return state
}

export default handleActions({
  ...commonReducers,
  [constants.SELECT_USER]: selectUser,
  [constants.UNSELECT_USER]: unselectUser
}, initialState)
