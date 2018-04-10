import constants from './constants'
import commonActions, {remoteAction} from '../../common/actions.js'

const actions = {
  ...commonActions,
  changeFilter: remoteAction(constants.CHANGE_FILTER, false)
}

export default actions
