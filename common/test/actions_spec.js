
import {
    expect
} from 'chai'

import actions from '../actions'

describe('Common Actions', () => {
  Object.entries(actions).forEach(([key, value]) => {
    describe(key, () => {
      it('returns object {type, payload, meta:{remote} } when given an argument', () => {
        const action = value('payload value')
        expect(action).to.have.all.keys(['type', 'payload', 'meta'])
        expect(action.meta).to.have.property('remote')
      })
      it('returns object {type, meta} when given no arguments', () => {
        const action = value()
        expect(action).to.have.property('type')
        expect(action).to.have.property('meta')
        expect(action.meta).to.have.property('remote')
        expect(action).to.not.have.property('payload')
      })
    })
  })
})
