import Server from 'socket.io'
import actions from './actions'


export default function startServer(store) {

  const io = new Server().attach(3000)
  console.log('server started on port 3000')

  store.subscribe(() => io.emit('action', actions.setState(store.getState())))

  io.on('connection', (socket) => {
    socket.emit('action', actions.setState(store.getState()))
    socket.on('action', action => {
      action.meta.socketId = socket.id
      store.dispatch(action)
    })
    socket.on('disconnect', (reason) => {
      console.log(reason)
      store.dispatch(actions.unselectUser(socket.id))
    })
  })
}
