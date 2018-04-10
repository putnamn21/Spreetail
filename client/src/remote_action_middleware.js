/*eslint-disable no-unused-vars*/

/**
 * calles socket.emit if the action.meta is true
 * @param  {socket} socket the socket connection to the server
 * @return {action}
 */
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action)
}
