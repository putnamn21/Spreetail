import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Badge from 'material-ui/Badge'
import InsertComment from '@material-ui/icons/InsertComment'
import Divider from 'material-ui/Divider'
import Modal from 'material-ui/Modal'
import Paper from 'material-ui/Paper'
import TaskDetails from './TaskDetails'
import CardComponent from './Card'


const styles = {
  container: {
    minWidth: '200px',
    margin: '2rem',
    cursor: 'pointer'
  },
  divider : {
    margin: '1rem 0'
  },
  stats:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paper: {
    maxHeight: '95%',
    overflow: 'auto',
    padding: '1rem',
    maxWidth: '60rem',
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}


class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen(){
    this.setState({ modalOpen: true })
  }

  handleClose(){
    this.setState({ modalOpen: false })
  }


  render() {
    const {task, classes, ...props} = this.props
    const completed = task.items.filter(item => item !== null && item.complete).length

    return (
      <CardComponent className={classes.container} onClick={this.handleOpen}>
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
        <Modal
          classes={{
            root: classes.root
          }}
          open={this.state.modalOpen}
          onClose={this.handleClose}>
          <Paper className={classes.paper}>
            <TaskDetails task={task} {...props}/>
          </Paper>
        </Modal>
      </CardComponent>
    )
  }
}


Task.propTypes = {
  task: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Task)
