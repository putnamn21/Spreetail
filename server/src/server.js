import Server from 'socket.io'

export default function startServer(store) {

  const io = new Server().attach(3000)
  console.log('server started on port 3000')

  store.subscribe(() => io.emit('state', store.getState()))

  io.on('connection', (socket) => {
    socket.emit('state', store.getState())
    socket.on('action', action => {
      store.dispatch(action)
    })
  })
}
