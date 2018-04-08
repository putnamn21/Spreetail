/*eslint-disable no-unused-vars*/

export default socket => store => next => action => {
  console.log('middleware intercepting action',action)
  if (action.meta && action.meta.remote) {
    console.log('IS REMOTE!')
    socket.emit('action', action)
  }
  return next(action)
}
