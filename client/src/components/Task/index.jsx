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
import CardComponent from '../Card'
import Button from 'material-ui/Button'
import Clear from '@material-ui/icons/Clear'


const styles = (theme) => ({
  container: {
    minWidth: '200px',
    margin: '2rem',
    cursor: 'pointer'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
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
    padding: '2rem',
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
  },
  remove: {
    backgroundColor: theme.palette.error.light,
    color: '#fff',
    ['&:hover']: {
      backgroundColor: theme.palette.error.main
    }
  }
})


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
            <div className={classes.header}>
              <Typography color="default" variant="display3" align="center">{task.title}</Typography>
              <Button classes={{root: classes.remove}} variant="fab" mini onClick={this.handleClose}>
                <Clear/>
              </Button>
            </div>
            <Divider className={classes.divider}/>
            <TaskDetails
              task={task}
              closeTask={this.handleClose} {...props}/>
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
