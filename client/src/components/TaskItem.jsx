import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import Delete from '@material-ui/icons/Delete'


const TaskItem = ({item, id, currentUser, taskId, setItemComplete, removeItem}) => (
  <ListItem
    style={{
      backgroundColor: '#fff',
      margin: '1rem 0',
      boxShadow: '1px 1px 6px rgba(0,0,0,0.3)'
    }}
    dense
    button
    onClick={() => setItemComplete({
      complete: !item.complete,
      completedBy: currentUser,
      completedDate: Date.now(),
      taskId: taskId,
      itemId: id
    })}>
    <Checkbox
      checked={item.complete}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText style={{
      textDecoration: item.complete ? 'line-through' : 'none'
    }} primary={item.title} />
    <ListItemSecondaryAction>
      <IconButton onClick={() => removeItem({
        taskId,
        itemId: id
      })}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  currentUser: PropTypes.number.isRequired,
  taskId: PropTypes.string.isRequired,
  setItemComplete: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
}

export default TaskItem
