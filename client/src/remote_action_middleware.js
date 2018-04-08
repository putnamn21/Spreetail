/*eslint-disable no-unused-vars*/

export default socket => store => next => action => {
  console.log(action)
  if (action.payload.meta && action.payload.meta.remote) {
    console.log(action.type)
    socket.emit('action', action)
  }
  return next(action)
}
