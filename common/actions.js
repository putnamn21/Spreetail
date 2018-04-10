import { createAction } from 'redux-actions'
import constants from './constants'

/**
 * calls createAction with meta.remote as true or false
 * @param  {string} actionName
 * @param  {boolean} remote - whether this action should be passed up to the remote server
 * @return {object} - returns a [flux-standard-action]{@link https://github.com/redux-utilities/flux-standard-action}
 */
export const remoteAction = (actionName, remote) => createAction(actionName, null, () => ({remote: remote}))

export default {
  setState       : remoteAction(constants.SET_STATE, false),
  selectUser     : remoteAction(constants.SELECT_USER, true),
  addTask        : remoteAction(constants.ADD_TASK, true),
  removeTask     : remoteAction(constants.REMOVE_TASK, true),
  addItem        : remoteAction(constants.ADD_ITEM, true),
  setItemComplete: remoteAction(constants.SET_ITEM_COMPLETE, true),
  removeItem     : remoteAction(constants.REMOVE_ITEM, true),
  addComment     : remoteAction(constants.ADD_COMMENT, true),
}
