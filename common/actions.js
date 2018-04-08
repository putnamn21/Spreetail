import { createAction } from 'redux-actions'
import constants from './constants'

const remoteAction = (actionType, remote) => createAction(actionType, null, () => ({remote: remote}))


//NOTE: client will pass up individual actions, e.g. select user and server will always
//respond by dispatching setState to client, to overwrite all local state to match server
export default {
  setState     : remoteAction(constants.SET_STATE, false),
  selectUser   : remoteAction(constants.SELECT_USER, true),
  addTask      : remoteAction(constants.ADD_TASK, true),
  removeTask   : remoteAction(constants.REMOVE_TASK, true),
  addItem      : remoteAction(constants.ADD_ITEM, true),
  removeItem   : remoteAction(constants.REMOVE_ITEM, true),
  addComment   : remoteAction(constants.ADD_COMMENT, true),
  removeComment: remoteAction(constants.REMOVE_COMMENT, true)
}
