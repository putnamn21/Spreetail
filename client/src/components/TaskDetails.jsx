import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'

const styles = {
  container: {
    minWidth: '200px'
  },
  divider : {
    margin: '1rem 0'
  }
}

const TaskDetails = ({classes, task}) => (
  <div>
    <Typography color="textSecondary" variant="title" align="center">{task.title}</Typography>
    <Divider className={classes.divider}/>
    <Typography variant="subheading" id="simple-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </div>
)

TaskDetails.propTypes = {
  task: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TaskDetails)
