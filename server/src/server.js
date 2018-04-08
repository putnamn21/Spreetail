import Server from 'socket.io'
import actions from './actions'


export default function startServer(store) {

  const io = new Server().attach(3000)
  console.log('server started on port 3000')

  store.subscribe(() => io.emit('action', () => {
    console.log('im gettin called')
    return actions.setState(store.getState())
  }))

  io.on('connection', (socket) => {
    console.log('i am also getting called')
    socket.emit('action', actions.setState(store.getState()))
    socket.on('action', action => {
      store.dispatch(action)
    })
  })
}
