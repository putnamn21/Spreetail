/* eslint-disable no-unused-vars*/

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import reducer from './reducer'
import actions from './actions'

import App from 'Component/App'

import remoteActionMiddleware from 'Src/remote_action_middleware'

const socket = io(`${location.protocol}//${location.hostname}:3000`)

const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore)

const store = createStoreWithMiddleware(reducer)

socket.on('state', state => {
  store.dispatch(actions.setState(state))
})

const div = document.createElement('div')
div.setAttribute('id', 'app')
document.body.appendChild(div)


ReactDOM.render(
	<Provider store={store}>
      <App />
	</Provider>,
	document.getElementById('app')
)
