// import {List, Map, fromJS} from 'immutable'
// import uniqueID from 'node-time-uuid'
//
// function markOrderAsComplete(state, orderID){
//   let index = state.get('pendingOrders').findIndex((entry) => entry.get('ID') === orderID)
//   if (index === -1) return state
//   let order = state.getIn(['pendingOrders', index])
//   return state.deleteIn(['pendingOrders', index])
//               .update('fulfilledOrders', entries => entries.push(order))
// }
// //EXPORTS
// export const INITIAL_STATE = Map()
//
// export function addID(entry){
//   console.log(entry)
//   entry.ID = new uniqueID().toString('base64')
//   return entry
// }
// /**
//  * Sets up the 'restaurant' in state
//  * @param {Map} state   Application state
//  * @param {JSON} entries All the restaurant info and menu items
//  */
// export function setEntries(state, entries) {
//   return state.set('restaurant' , fromJS(entries)).merge({
//     pendingOrders: List(),
//     fulfilledOrders: List()
//   })
// }
// /**
//  * Adds the order to state's pendingOrders
//  * @param {Map}    state  Application State
//  * @param {Object} entry  The order to update
//  */
// export function addOrder(state, entry) {
//   console.log(entry)
//   return state.update(
//       'pendingOrders',
//       List(),
//       (val) => val.push(fromJS(entry))
//     )
// }
// /**
//  * Moves an order from 'pendingOrders' to 'fulfilledOrders'
//  * @param  {Map}   state Application state
//  * @param  {Array} orders IDs of orders to mark as complete
//  * @return {Map}    Application State
//  */
// export function ordersComplete(state, orders){
//   if(!Array.isArray(orders)) return markOrderAsComplete(state , orders)
//   orders.forEach((orderID) => {
//     state = markOrderAsComplete(state, orderID)
//   })
//   return state
// }
//
//
//
//   // export function next(state){
//   // 	const entries = state.get('entries')
//   // 						 .concat(getWinners(state.get('vote')));
//   // 	if (entries.size === 1) {
//   // 		return state.remove('vote').remove('entries').remove('round').set('winner', entries.first());
//   // 	} else {
//   // 		return state.merge({
//   // 			vote: Map({pair: entries.take(2)}),
//   // 			entries: entries.skip(2)
//   // 		}).update('round', 0, val => val + 1);
//   // 	}
//   // }
//   //
//   // export function resetVote(state){
//   // 	return state.set('entries', state.get('initialEntries'))
//   // 							.remove('winner')
//   // 							.remove('vote')
//   // 							.remove('round')
//   // }
//   //
//   // export function vote(voteState, entry) {
//   // 	if(voteState.get('pair').includes(entry)){
//   // 		return voteState.updateIn(['tally', entry], 0, val => val + 1);
//   // 	}
//   //   	return voteState;
//   // }
//
// // //INTERNAL
// //   function getWinners(vote){
// //     if (!vote) return [];
// //     const [a, b] = vote.get('pair');
// //     const aVotes = vote.getIn(['tally', a], 0);
// //     const bVotes = vote.getIn(['tally', b], 0);
// //     if      (aVotes > bVotes)  return [a];
// //     else if (aVotes < bVotes)  return [b];
// //     else                       return [a, b];
// //   }
