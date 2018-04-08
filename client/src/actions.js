import { createAction } from 'redux-actions'
import constants from 'constants'
const remoteAction = (actionType, remote) => createAction(actionType, null, () => ({remote: remote}))
import commonActions from '../../common/actions.js'



const actions = {
  ...commonActions,
  changeFilter: remoteAction(constants.CHANGE_FILTER, false) 
}

export default actions
