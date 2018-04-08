import update from 'immutability-helper'
import constants from './constants'

const setState = (state, action) => {
  if(action.payload){
    return update(state, {
      $merge: action.payload
    })
  } else return state
}

export default {
  [constants.SET_STATE]: setState
}
