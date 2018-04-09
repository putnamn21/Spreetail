import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Badge from 'material-ui/Badge'
import InsertComment from '@material-ui/icons/InsertComment'
import Divider from 'material-ui/Divider'

const styles = {
  container: {
    minWidth: '200px'
  },
  divider : {
    margin: '1rem 0'
  },
  stats:{
    display: 'flex',
    justifyContent: 'space-between',
  }
}


const Task = ({task, classes}) => {

  const completed = task.items.filter(item => item.complete).length

  return (
    <div className={classes.container}>
      <Typography color="textSecondary" variant="title" align="center">{task.title}</Typography>
      <Divider className={classes.divider}/>
      <div className={classes.stats}>
        {task.comments.length > 0
          ? <Badge badgeContent={task.comments.length} color="primary">
            <InsertComment color="action" />
          </Badge>
          : null}
          <Typography variant="body2" color="primary">{completed} / {task.items.length}</Typography>
      </div>

    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Task)
