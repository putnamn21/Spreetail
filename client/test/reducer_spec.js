
import {
    expect
} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  describe('SET_STATE', () => {
    it('initializes the applications state by merging objects', () => {
      const state = {
        key: 'value',
        foo: 'baz'
      }
      const action = {
        type: 'SET_STATE',
        state: {
          foo: 'bar'
        }
      }
      const nextState = reducer(state, action)
      expect(nextState).to.deep.equal({
        key: 'value',
        foo: 'bar'
      })
    })
  })
})

// describe('reducer', () => {
//     describe('ADD_TO_QUE', () => {
//         it('adds a new queued item to the list of queueud items', () => {
//             const state = Map({
//                 queuedOrder: Map({
//                     items: List.of(Map({
//                         name: 'foo'
//                     }))
//                 })
//             })
//             const action = {
//                 type: 'ADD_TO_QUE',
//                 entry: Map({
//                     name: 'bar'
//                 })
//             }
//             const nextState = reducer(state, action);
//             expect(nextState).to.equal(fromJS({
//                 queuedOrder: {
//                     items: [
//                         {name: 'foo'},
//                         {name: 'bar'}
//                     ]
//                 }
//             }))
//         })
//         it('updates the quantity of an existing item', () => {
//             const state = fromJS({
//                 queuedOrder: {
//                     items: [
//                         {
//                             name : 'foo',
//                             qty  : 1
//                         },
//                         {
//                             name : 'bar',
//                             qty  : 10
//                         }
//                     ]
//                 }
//             })
//             const action = {
//                 type: 'ADD_TO_QUE',
//                 entry: Map({
//                     name: 'bar',
//                     qty : 2
//                 })
//             }
//             const nextState = reducer(state, action);
//             expect(nextState).to.equal(fromJS({
//                 queuedOrder: {
//                     items: [
//                         {
//                             name: 'foo',
//                             qty: 1
//                         },
//                         {
//                             name: 'bar',
//                             qty: 12}
//                     ]
//                 }
//             }))
//         })
//     })
//     it('handles SET_STATE with plain JS payload', () => {
//         const initialState = Map();
//         const action = {
//             type: 'SET_STATE',
//             state: {
//                 restaurant: {
//                     menuItems: [{
//                         'category': 'main',
//                         'subcategory': 'pizzas',
//                         'name': 'Supreme',
//                         'price': 16.50
//                     },
//                     {
//                         'category': 'main',
//                         'subcategory': 'subs',
//                         'name': 'Meatball Sub',
//                         'price': 9.00
//                     },
//                     {
//                         'category': 'drinks',
//                         'subcategory': 'wine',
//                         'name': 'White',
//                         'price': 6.00
//                     }
//                     ]
//                 }
//             }
//         };
//         const nextState = reducer(initialState, action);
//         expect(nextState).to.equal(Map({
//             'restaurant': Map({
//                 'menuItems': List.of(Map({
//                     'category': 'main',
//                     'subcategory': 'pizzas',
//                     'name': 'Supreme',
//                     'price': 16.5
//                 }), Map({
//                     'category': 'main',
//                     'subcategory': 'subs',
//                     'name': 'Meatball Sub',
//                     'price': 9
//                 }), Map({
//                     'category': 'drinks',
//                     'subcategory': 'wine',
//                     'name': 'White',
//                     'price': 6
//                 })),
//                 'organizedMenu': OrderedMap({
//                     'main': OrderedMap({
//                         'pizzas': List.of(Map({
//                             'category': 'main',
//                             'subcategory': 'pizzas',
//                             'name': 'Supreme',
//                             'price': 16.5
//                         })),
//                         'subs': List.of(Map({
//                             'category': 'main',
//                             'subcategory': 'subs',
//                             'name': 'Meatball Sub',
//                             'price': 9
//                         }))
//                     }),
//                     'drinks': OrderedMap({
//                         'wine': List.of(Map({
//                             'category': 'drinks',
//                             'subcategory': 'wine',
//                             'name': 'White',
//                             'price': 6
//                         }))
//                     })
//                 })
//             }),
//             'queuedOrder': Map({
//                 'customer': Map(),
//                 'items': List()
//             })
//         }));
//     });
// });
