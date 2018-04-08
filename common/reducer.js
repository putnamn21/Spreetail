import update from 'immutability-helper'
import constants from './constants'
import {uniqueId, findIndex} from 'lodash'

const setState = (state, action) => {
  if(action.payload){
    return update(state, {
      $merge: action.payload
    })
  } else return state
}

const addTask = (state, { payload }) => update(state, {
  tasks: {
    $push: [{
      id: uniqueId('task_'),
      title: payload.title,
      createdBy: payload.createdBy,
      items: [],
      comments: []
    }]
  }
})

const removeTask = (state, {payload}) => {
  let index = findIndex(state.tasks, {id: payload})
  if(index > -1){
    return update(state, {
      tasks: {
        $unset: [index]
      }
    })
  } else return state
}

const addItem = (state, {payload}) => {
  let index = findIndex(state.tasks, {id: payload.taskId})
  if (index > -1){
    return update(state, {
      tasks: {
        [index] : {
          items: {
            $push: [{
              title: payload.title,
              complete: false,
              completedBy: null,
              completedDate: null
            }]
          }
        }
      }
    })
  } else return state
}

const removeItem = (state, {payload}) => {
  let index = findIndex(state.tasks, {id: payload.taskId})
  if (index > -1){
    return update(state, {
      tasks: {
        [index] : {
          items: {
            $unset: [payload.itemIndex]
          }
        }
      }
    })
  } else return state
}

const addComment = (state, {payload}) => {
  let index = findIndex(state.tasks, {id: payload.taskId})
  if (index > -1){
    return update(state, {
      tasks: {
        [index] : {
          comments: {
            $push: [{
              title: payload.message,
              user: payload.user,
              createdDate: payload.createdDate
            }]
          }
        }
      }
    })
  } else return state
}

const removeComment = (state, {payload}) => {
  let index = findIndex(state.tasks, {id: payload.taskId})
  if (index > -1){
    return update(state, {
      tasks: {
        [index] : {
          items: {
            $unset: [payload.commentIndex]
          }
        }
      }
    })
  } else return state
}

export default {
  [constants.SET_STATE]     : setState,
  [constants.ADD_TASK]      : addTask,
  [constants.REMOVE_TASK]   : removeTask,
  [constants.ADD_ITEM]      : addItem,
  [constants.REMOVE_ITEM]   : removeItem,
  [constants.ADD_COMMENT]   : addComment,
  [constants.REMOVE_COMMENT]: removeComment
}
