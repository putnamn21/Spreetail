import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import MoodIcon from '@material-ui/icons/Mood'


const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
    border: `2px solid ${theme.palette.secondary.light}`
  },
  colorDefault: {
    backgroundColor: theme.palette.secondary.light
  },

})

const UserChip = ({classes, user, light}) => (
  <Chip
      avatar={
        <Avatar classes={{
          colorDefault: classes.colorDefault
        }}>
          <MoodIcon />
        </Avatar>
      }
      label={`${user.fName} ${user.lName}`}
      style={light ? {backgroundColor: '#fff'} : null}
      className={classes.chip}/>
)

UserChip.propTypes = {
  classes: PropTypes.object.isRequired,
  light: PropTypes.bool,
  user:   PropTypes.shape({
    fName: PropTypes.string.isRequired,
    lName: PropTypes.string.isRequired
  }).isRequired
}

export default withStyles(styles)(UserChip)
