import React from 'react'
import actions from '../actions'
import constants from '../constants'
import { connect } from 'react-redux'

//funciton to apply selected state filter
const filterTasks = (filter, tasks) => {

  const filters = constants.filters

  let filteredTasks

  switch(filter){
    case filters.FILTER_COMPLETE:
      filteredTasks = tasks.filter(task => task.items.reduce(
        (sum, item) => {
          return sum && item.complete
        }, true))
      break
    case filters.FILTER_INPROGRESS:
      filteredTasks = tasks.filter(task => {
        const {allComplete, atleastOneComplete} = task.items.reduce((sum, item) => {
          return {
            allComplete: sum.allComplete && item.complete,
            atleastOneComplete: sum.atleastOneComplete || item.complete
          }
        }, {
          allComplete: true,
          atleastOneComplete: false
        })
        return !allComplete && atleastOneComplete
      })
      break
    default:
      filteredTasks = tasks
  }

  return filteredTasks

}


const withTasks = (Child) => props => <Child {...props}/>

const mapStateToProps = ({filters, tasks}) => {
  return ({
    tasks: filterTasks(filters.selected, tasks),
    filters
  })
}

const mapDispatchToProps = {
  addTask: actions.addTask,
  changeFilter: actions.changeFilter
}

export default (Child) => connect(mapStateToProps, mapDispatchToProps)(withTasks(Child))
