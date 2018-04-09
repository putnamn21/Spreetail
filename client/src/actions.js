import { createAction } from 'redux-actions'
import constants from './constants'
import commonActions from '../../common/actions.js'

const remoteAction = (actionType, remote) => createAction(actionType, null, () => ({remote: remote}))


const actions = {
  ...commonActions,
  changeFilter: remoteAction(constants.CHANGE_FILTER, false)
}

export default actions
