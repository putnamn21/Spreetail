import startServer from './src/server'
import {createStore} from 'redux'
import reducer from './src/reducer'
import actions from './src/actions'

export const store = createStore(reducer)
store.dispatch(actions.setState())

startServer(store)
