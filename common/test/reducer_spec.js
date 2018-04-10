
import {
    expect
} from 'chai'

import reducer from '../reducer'
import actions from '../actions'

const {setState, addTask} = actions

describe('reducer', () => {

  describe('SET_STATE', () => {
    it('initializes the applications state by merging objects', () => {

      const state = {
        key: 'value',
        foo: 'baz'
      }

      const action = setState({foo: 'bar'})

      const nextState = reducer.SET_STATE(state, action)

      expect(nextState).to.deep.equal({
        key: 'value',
        foo: 'bar'
      })

    })
  })

  describe('ADD_TASK', () => {
    const state = {
      tasks: []
    }
    const action = addTask({
      title: 'title',
      createdBy: 1
    })
    const nextState = reducer.ADD_TASK(state, action)
    it('pushes the payload onto state.tasks[]', () => {
      expect(nextState.tasks).to.have.lengthOf(1)
    })
    it('added task has {id, title, createdBy, items, comments}', () => {
      expect(nextState.tasks[0]).to.have.all.keys(['id', 'title', 'createdBy', 'items', 'comments'])
    })
  })

})
