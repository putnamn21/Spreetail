import update from 'immutability-helper'
import * as constants from 'constants'

const setState = (state, newState) => update(state, {
  $merge: newState
})

export default {
  [constants.SET_STATE]: setState
}
