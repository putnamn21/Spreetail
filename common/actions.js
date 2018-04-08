import { createAction } from 'redux-actions'
import constants from './constants'

const remoteAction = (actionType, remote) => createAction(actionType, null, () => ({remote: remote}))


//NOTE: client will pass up individual actions, e.g. select user and server will always
//respond by dispatching setState to client, to overwrite all local state to match server
export default {
  setState: remoteAction(constants.SET_STATE, false),
  selectUser: remoteAction(constants.SELECT_USER, true)
}
