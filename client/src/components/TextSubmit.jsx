import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  container: {
    display: 'inline-flex',
    wrap: 'no-wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: '1rem',
  }
})

class TextSubmit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fieldValue: '',
      error: false
    }
  }

  handleSubmit(){
    if(!this.state.fieldValue){
      this.setState({
        error: true
      })
    } else {
      this.props.submit(this.state.fieldValue)
      this.setState({
        fieldValue: ''
      })
    }
  }

  handleChange(e){
    this.setState({
      fieldValue: e.target.value,
      error: false
    })
  }

  render(){
    const {classes, label} = this.props
    const {error, fieldValue} = this.state
    return(
      <div className={classes.container}>
        <div>
          <TextField
            error={error}
            label={error ? 'Error: cannot be empty' : label}
            className={classes.textField}
            value={fieldValue}
            onChange={this.handleChange.bind(this)}
            margin="normal"
          />
        </div>
        <div>
          <Button onClick={this.handleSubmit.bind(this)} variant="fab" color="secondary" className={classes.button}>
            <AddIcon />
          </Button>
        </div>
      </div>
    )
  }
}

TextSubmit.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  submit: PropTypes.func
}

export default withStyles(styles)(TextSubmit)
