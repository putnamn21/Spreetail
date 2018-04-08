import { handleActions } from 'redux-actions'
import * as commonReducers from '../../common/reducer.js'
import initialState from '../initialState.json'

export default handleActions({...commonReducers}, initialState)
