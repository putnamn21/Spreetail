import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

import {upperFirst, lowerCase} from 'lodash'

import TextSubmit from './TextSubmit'
import withTasks from '../containers/TasksHOC'
import Task from './Task'

const styles = () => ({
  container: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  filterWrap: {
    flex: '0 0 auto',
    backgroundColor: '#fff',
    padding: '2rem 0',
    textAlign: 'center'
  },
  tasksWrap: {
    flex: '1',
    margin: '0 auto',
    overflow: 'auto'
  },
  center: {
    textAlign: 'center'
  },
  formControl: {
    marginTop: '1rem'
  },
  selectList: {
    minWidth: '150px'
  },
  addTaskBar: {
    flex: 0,
    textAlign: 'right',
  }
})

const Tasks = ({tasks, changeFilter, filters, addTask, classes, currentUser, ...props}) => {
  return (
    <div className={classes.container}>
        <div className={classes.filterWrap}>
          <Typography variant="title" align="center">Filter Tasks</Typography>
          <FormControl className={classes.formControl}>
          <InputLabel>Tasks</InputLabel>
          <Select
            native
            className={classes.selectList}
            value={filters.selected}
            onChange={e => changeFilter(e.target.value)}>
              {filters.available.map((filter, i) => (
                <option key={i} value={filter}>{upperFirst(lowerCase(filter))}</option>
              ))}
          </Select>
        </FormControl>
        </div>
        <Grid
          container
          className={classes.tasksWrap}
          justify="space-around"
          alignItems="flex-start">
            {tasks.length > 0 ? tasks.map((task, i) => (
                <Task
                  key={i}
                  task={task}
                  currentUser={currentUser}
                  {...props}/>
            )): null}
        </Grid>
        <div className={classes.addTaskBar}>
          <TextSubmit label='Add Task' submit={(value) => {addTask({
            title: value,
            createdBy: currentUser})}}
            />
        </div>
    </div>
  )

}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ),
  addTask: PropTypes.func.isRequired,
  currentUser: PropTypes.number.isRequired
}

export default withStyles(styles)(withTasks(Tasks))
