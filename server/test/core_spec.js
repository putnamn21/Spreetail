import {
    List,
    Map,
    fromJS
} from 'immutable';
import {
    expect
} from 'chai';

import {
    setEntries,
    addOrder,
    addID,
    ordersComplete
} from '../src/core';

describe('application logic restaurant - core.spec', ()=>{

  describe('setEntries', () => {
    it('adds plain JSON entries to the state', () => {
      const state     = Map();
      const entries   = {'entries':'entries'};
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(fromJS({
        restaurant:      {entries: 'entries'},
        pendingOrders:   [],
        fulfilledOrders: []
      }));
    });
  });

  describe('addOrder', () => {

    it('adds the order to pending orders', () => {
      const state = fromJS({
        restaurant:      {entries: 'entries'},
        pendingOrders:   [],
        fulfilledOrders: []
      });
      const order = {order: 'order'}
      const nextState = addOrder(state, order);
      expect(nextState).to.equal(fromJS({
        restaurant:      {entries: 'entries'},
        pendingOrders:   [{
          order: 'order'
        }],
        fulfilledOrders: []
      }));
    });

  });

  describe('addID', () => {

    it('Adds an ID key value pair to an object', () => {
      const entry = {entry: 'entry'};
      const nextEntry = addID(entry);
      expect(nextEntry).to.have.property('ID').that.is.a('string');
    });

  });

  describe('ordersComplete', () => {
      it('moves a single order from pending to fulfilled', () => {
        const state = fromJS({
          pendingOrders:   [{
            ID: 'ba',
            order: 'order'
          },
          {
            ID: '2a',
            order: 'order'
          }],
          fulfilledOrders: []
        });
        const ID = '2a';
        const nextState = ordersComplete(state, ID);
        expect(nextState).to.equal(fromJS({
          pendingOrders: [{
            ID: 'ba',
            order: 'order'
          }],
          fulfilledOrders: [{
            ID: '2a',
            order: 'order'
          }]
        }));
      });

      it('moves multiple orders from pending to fulfilled', () => {
        const state = fromJS({
          pendingOrders:   [{
            ID: 'a',
            order: 'order'
          },
          {
            ID: 'b',
            order: 'order'
          },
          {
            ID: 'c',
            order: 'order'
          }],
          fulfilledOrders: []
        });
        const IDs = ['a','b'];
        const nextState = ordersComplete(state, IDs);
        expect(nextState).to.equal(fromJS({
          pendingOrders: [{
            ID: 'c',
            order: 'order'
          }],
          fulfilledOrders: [{
            ID: 'a',
            order: 'order'
          },
          {
            ID: 'b',
            order: 'order'
          }]
        }));
      });
  });

});

// describe('application logic - core.spec', () => {
//     describe('resetVote', () => {
//         it('resets to initalEntries after win', () => {
//           const state = fromJS({
//             winner: ['Trainspotting'],
//             initialEntries: ['Trainspotting', '28 Days Later']
//           });
//           const nextState = resetVote(state);
//           expect(nextState).to.equal(fromJS({
//               entries: ['Trainspotting', '28 Days Later'],
//               initialEntries: ['Trainspotting', '28 Days Later']
//           }));
//         });
//         it('resets to initalEntries in the middle of voting', () => {
//           const state = fromJS({
//               round: 1,
//               vote: {
//                   pair: ['Trainspotting', '28 Days Later'],
//                   tally: {
//                       'Trainspotting': 4,
//                       '28 Days Later': 2
//                   }
//               },
//               entries: ['Sunshine'],
//               initialEntries: ['Trainspotting', '28 Days Later', 'Sunshine']
//           });
//           const nextState = resetVote(state);
//           expect(nextState).to.equal(fromJS({
//               entries: ['Trainspotting', '28 Days Later', 'Sunshine'],
//               initialEntries: ['Trainspotting', '28 Days Later', 'Sunshine']
//           }));
//         });
//     });
//
//
//     describe('setEntries', () => {
//
//         it('adds the entries to the state', () => {
//             const state = Map();
//             const entries = ['Trainspotting', '28 Days Later'];
//             const nextState = setEntries(state, entries);
//             expect(nextState).to.equal(fromJS({
//                 entries: ['Trainspotting', '28 Days Later'],
//                 initialEntries: ['Trainspotting', '28 Days Later']
//             }));
//         });
//
//     });
//
//     describe('next', () => {
//         it('initalizes a voting round count', () => {
//             const state = Map({
//                 entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
//             });
//             const nextState = next(state);
//             expect(nextState).to.equal(Map({
//                 round: 1,
//                 vote: Map({
//                     pair: List.of('Trainspotting', '28 Days Later')
//                 }),
//                 entries: List.of('Sunshine')
//             }));
//         });
//
//         it('increments a voting round count', () => {
//             const state = Map({
//                 round: 1,
//                 vote: Map({
//                     pair: List.of('Trainspotting', '28 Days Later'),
//                     tally: Map({
//                         'Trainspotting': 4,
//                         '28 Days Later': 2
//                     })
//                 }),
//                 entries: List.of('Sunshine', 'Millions', '127 Hours')
//             });
//             const nextState = next(state);
//             expect(nextState).to.equal(Map({
//                 round: 2,
//                 vote: Map({
//                     pair: List.of('Sunshine', 'Millions')
//                 }),
//                 entries: List.of('127 Hours', 'Trainspotting')
//             }));
//         });
//
//         it('takes the next two entries under vote', () => {
//             const state = Map({
//                 entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
//             });
//             const nextState = next(state);
//             expect(nextState).to.equal(Map({
//                 round: 1,
//                 vote: Map({
//                     pair: List.of('Trainspotting', '28 Days Later')
//                 }),
//                 entries: List.of('Sunshine')
//             }));
//         });
//
//         it('puts winner of current vote back to entries', () => {
//             const state = Map({
//                 vote: Map({
//                     pair: List.of('Trainspotting', '28 Days Later'),
//                     tally: Map({
//                         'Trainspotting': 4,
//                         '28 Days Later': 2
//                     })
//                 }),
//                 entries: List.of('Sunshine', 'Millions', '127 Hours')
//             });
//             const nextState = next(state);
//             expect(nextState).to.equal(Map({
//                 round: 1,
//                 vote: Map({
//                     pair: List.of('Sunshine', 'Millions')
//                 }),
//                 entries: List.of('127 Hours', 'Trainspotting')
//             }));
//         });
//
//         it('puts both from tied vote back to entries', () => {
//             const state = Map({
//                 vote: Map({
//                     pair: List.of('Trainspotting', '28 Days Later'),
//                     tally: Map({
//                         'Trainspotting': 3,
//                         '28 Days Later': 3
//                     })
//                 }),
//                 entries: List.of('Sunshine', 'Millions', '127 Hours')
//             });
//             const nextState = next(state);
//             expect(nextState).to.equal(Map({
//                 round: 1,
//                 vote: Map({
//                     pair: List.of('Sunshine', 'Millions')
//                 }),
//                 entries: List.of('127 Hours', 'Trainspotting', '28 Days Later')
//             }));
//         });
//
//         it('marks winner when just one entry left', () => {
//             const state = Map({
//                 vote: Map({
//                     pair: List.of('Trainspotting', '28 Days Later'),
//                     tally: Map({
//                         'Trainspotting': 4,
//                         '28 Days Later': 2
//                     })
//                 }),
//                 entries: List()
//             });
//             const nextState = next(state);
//             expect(nextState).to.equal(Map({
//                 winner: 'Trainspotting'
//             }));
//         });
//
//     });
//
//     describe('vote', () => {
//
//         it('creates a tally for the voted entry', () => {
//             const state = Map({
//                 pair: List.of('Trainspotting', '28 Days Later')
//             });
//             const nextState = vote(state, 'Trainspotting')
//             expect(nextState).to.equal(Map({
//                 pair: List.of('Trainspotting', '28 Days Later'),
//                 tally: Map({
//                     'Trainspotting': 1
//                 })
//             }));
//         });
//
//         it('adds to existing tally for the voted entry', () => {
//             const state = Map({
//                 pair: List.of('Trainspotting', '28 Days Later'),
//                 tally: Map({
//                     'Trainspotting': 3,
//                     '28 Days Later': 2
//                 })
//             });
//             const nextState = vote(state, 'Trainspotting');
//             expect(nextState).to.equal(Map({
//                 pair: List.of('Trainspotting', '28 Days Later'),
//                 tally: Map({
//                     'Trainspotting': 4,
//                     '28 Days Later': 2
//                 })
//             }));
//         });
//
//         it('doesn\'t allow a vote to be cast if it isnt in the current pair', () => {
//             const state = Map({
//                 pair: List.of('dog', 'cat'),
//                 tally: Map({
//                     'Trainspotting': 3,
//                     '28 Days Later': 2
//                 })
//             });
//             const nextState = vote(state, 'Trainspotting');
//             expect(nextState).to.equal(Map({
//                 pair: List.of('dog', 'cat'),
//                 tally: Map({
//                     'Trainspotting': 3,
//                     '28 Days Later': 2
//                 })
//             }));
//         });
//
//     });
//
// });
