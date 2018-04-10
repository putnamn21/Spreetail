import React from 'react'
import actions from '../actions'
import constants from '../constants'
import { connect } from 'react-redux'

/**
 * Allows you to limit tasks to those that are complete or in progress
 * @param  {string} filter one of constants.filters
 * @param  {object[]} tasks  state.tasks[]
 * @return {object[]}        filtered tasks
 */
const filterTasks = (filter, tasks) => {

  const filters = constants.filters

  let filteredTasks

  switch(filter){
    case filters.FILTER_COMPLETE:
      filteredTasks = tasks.filter(task => task.items.reduce(
        (sum, item) => {
          return sum && item.complete//sum will remain false if one item.complete is false
        }, true))
      break
    case filters.FILTER_IN_PROGRESS:
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
        return !allComplete && atleastOneComplete //make sure at least one is complete and that not all are complete
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
