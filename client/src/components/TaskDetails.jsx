import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'
import moment from 'moment'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import List from 'material-ui/List'
import TaskItem from './TaskItem'

import TextSubmit from './TextSubmit'

const styles = (theme) => ({
  container: {
    minWidth: '200px'
  },
  divider : {
    margin: '1rem 0'
  },
  commentContainer: {
    paddingTop: '1px',
    borderRadius: '3px',
    backgroundColor: theme.palette.grey[300]
  },
  comment: {
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '3px',
    backgroundColor: '#fff'
  }
})

const TaskDetails = ({classes, task, addItem, addComment, currentUser, setItemComplete, removeItem, users}) => (
  <div>
    <Typography color="primary" variant="display3" align="center">{task.title}</Typography>
    <Divider className={classes.divider}/>
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
    <TextSubmit label='Add Task' submit={(value) => {addItem({
      title: value,
      taskId: task.id})}}/>
    <Typography color="textSecondary" variant="display1" align="left" gutterBottom>Comments</Typography>
    <div className={classes.commentContainer}>
      {task.comments.map((comment, i) => {

        const user = users[comment.user]

        return (
          <div className={classes.comment} key={i}>
            <Typography color="textSecondary" variant="body2">{user.fName} {user.lName}</Typography>
            <Typography variant="title">{comment.message}</Typography>
            <Typography variant="caption">{moment(comment.createdDate).format('MMM Do, h:mm a')}</Typography>
          </div>
        )
      })}
      <TextSubmit label='Add Comment' submit={(value) => {addComment({
        message: value,
        user: currentUser,
        createdDate: Date.now(),
        taskId: task.id})}}/>
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
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

const mapDispatchToProps = {
  addItem      : actions.addItem,
  removeItem   : actions.removeItem,
  setItemComplete: actions.setItemComplete,
  addComment   : actions.addComment,
  removeComment: actions.removeComment
}

export default connect(null, mapDispatchToProps )(withStyles(styles)(TaskDetails))
