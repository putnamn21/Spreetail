import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles SET_ENTRIES', () => {
    const initialState = Map()
    const action = {type: 'SET_ENTRIES', entries: {entries: 'entries'}}
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      restaurant : {entries:'entries'},
      pendingOrders : [],
      fulfilledOrders : []
    }))
  })
  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: {entries: 'entries'}}
    const nextState = reducer(undefined, action)
    expect(nextState).to.equal(fromJS({
      restaurant     : {entries:'entries'},
      pendingOrders  : [],
      fulfilledOrders: []
    }))
  })
})


// it('handles NEXT', () => {
//   const initialState = fromJS({
//     entries: ['Trainspotting', '28 Days Later']
//   });
//   const action = {type: 'NEXT'};
//   const nextState = reducer(initialState, action);
//
//   expect(nextState).to.equal(fromJS({
//     vote: {
//       pair: ['Trainspotting', '28 Days Later']
//     },
//     entries: [],
//     round : 1
//   }));
// });
//
// it('handles VOTE', () => {
//   const initialState = fromJS({
//     vote: {
//       pair: ['Trainspotting', '28 Days Later']
//     },
//     entries: []
//   });
//   const action = {type: 'VOTE', entry: 'Trainspotting'};
//   const nextState = reducer(initialState, action);
//
//   expect(nextState).to.equal(fromJS({
//     vote: {
//       pair: ['Trainspotting', '28 Days Later'],
//       tally: {Trainspotting: 1}
//     },
//     entries: []
//   }));
// });
