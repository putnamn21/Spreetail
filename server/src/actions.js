import { createAction } from 'redux-actions'
import constants from './constants'
import commonActions from '../../common/actions'

const actions = {
  ...commonActions,
  unselectUser: createAction(constants.UNSELECT_USER, null, {meta: null})
}

export default actions
