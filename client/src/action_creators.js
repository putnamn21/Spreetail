export function setState(state) {
  return {
    type: 'SET_STATE',
    state: state
  }
}
/**
 * submits orders to the server as complete
 * @param  {Array} ids array of ids submitted as complete
 * @return {Object} action to dispatch to server
 */
export function orderCompletes(ids) {
  return {
    meta: {
      remote: true
    },
    type: 'ORDERS_COMPLETE',
    entries: ids
  }
}
