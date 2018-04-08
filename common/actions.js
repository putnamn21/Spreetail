import { createAction } from 'redux-actions'
import constants from './constants'

export default {
  setState: createAction(constants.SET_STATE)
}
