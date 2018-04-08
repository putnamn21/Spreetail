import { handleActions } from 'redux-actions'
import * as commonReducers from '../../common/reducer'

const initialState = {
  users: [],
  tasks: []
}

export default handleActions({...commonReducers}, initialState)
