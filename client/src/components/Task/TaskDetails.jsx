import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../../actions'
import moment from 'moment'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Delete from '@material-ui/icons/Delete'
import List from 'material-ui/List'
import TaskItem from './TaskItem'

import TextSubmit from '../TextSubmit'

const styles = (theme) => ({
  container: {
    minWidth: '200px'
  },
  taskContainer: {
    padding: '0 1rem 1rem 1rem',
    borderRadius: '3px',
    backgroundColor: theme.palette.grey[200]
  },
  commentContainer: {
    padding: '1px 1rem 1rem 1rem',
    borderRadius: '3px',
    backgroundColor: theme.palette.grey[200]
  },
  comment: {
    padding: '0.5rem',
    margin: '1rem 0',
    borderRadius: '3px',
    backgroundColor: '#fff',
    boxShadow: '1px 1px 6px rgba(0,0,0,0.3)'
  },
  margin: {
    margin: '1rem 0'
  },
  topMargin: {
    marginTop: '1rem'
  },
  remove: {
    backgroundColor: theme.palette.error.light,
    color: '#fff',
    ['&:hover']: {
      backgroundColor: theme.palette.error.main
    }
  }
})

const TaskDetails = ({classes, task, addItem, addComment, currentUser, setItemComplete, removeItem, users, removeTask}) => (
  <div>
    <Typography className={classes.margin} color="primary" variant="display1">Task Items</Typography>
    <div className={classes.taskContainer}>
      <List>
        {task.items.map((item, i) => (
          <TaskItem
            key={i}
            id={i}
            item={item}
            currentUser={currentUser}
            taskId={task.id}
            removeItem={removeItem}
            setItemComplete={setItemComplete}
           />
        ))}
      </List>
      <TextSubmit label='Add Task' submit={(value) => addItem({
        title: value,
        taskId: task.id})}/>
    </div>
    <Typography className={classes.margin} color="primary" variant="display1">Comments</Typography>
    <div className={classes.commentContainer}>
      {task.comments.map((comment, i) => {

        const user = users[comment.user]

        return (
          <div className={classes.comment} key={i}>
            <Typography variant="title">{comment.message}</Typography>
            <Typography variant="caption">{user.fName} {user.lName} - {moment(comment.createdDate).format('MMM Do, h:mm a')}</Typography>
          </div>
        )
      })}
      <TextSubmit label='Add Comment' submit={(value) => addComment({
        message: value,
        user: currentUser,
        createdDate: Date.now(),
        taskId: task.id})}/>
    </div>
    <div className={classes.topMargin}>
      <Button onClick={() => removeTask(task.id)} classes={{root: classes.remove}} variant="fab">
        <Delete />
      </Button>
    </div>
  </div>
)

TaskDetails.propTypes = {
  task: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.number.isRequired,
  setItemComplete: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

const mapDispatchToProps = {
  addItem      : actions.addItem,
  removeItem   : actions.removeItem,
  setItemComplete: actions.setItemComplete,
  addComment   : actions.addComment,
  removeComment: actions.removeComment,
  removeTask: actions.removeTask
}

export default connect(null, mapDispatchToProps )(withStyles(styles)(TaskDetails))
