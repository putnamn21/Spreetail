import React from 'react'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.grey[800],
    padding: '1rem'
  },
})

const Header = ({classes}) => (
  <header className={classes.header}>
    <Typography variant="display2" align="center" color="primary">
      Spreetail Task Manager
    </Typography>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Header)
