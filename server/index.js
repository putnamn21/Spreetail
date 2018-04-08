import startServer from './src/server'
import {createStore} from 'redux'
import reducer from './src/reducer'

export const store = createStore(reducer, {})
startServer(store)
