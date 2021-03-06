import React from 'react'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import UserChip from './UserChip'


const styles = theme => ({
  header: {
    flex: '0 0 auto',
    backgroundColor: theme.palette.grey[800],
    padding: '1rem'
  },
  chip: {
    margin: theme.spacing.unit,
  },

})

const Header = ({classes, user}) => (
  <header className={classes.header}>
    <Grid container justify="space-between">
      <Typography variant="display2" align="center" color="primary">
        Spreetail Task Manager
      </Typography>
      {user !== null
       ? <UserChip user={user} light={true}/>
       : null}
    </Grid>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  user:   PropTypes.shape({
    fName: PropTypes.string.isRequired,
    lName: PropTypes.string.isRequired
  })
}


export default withStyles(styles)(Header)
