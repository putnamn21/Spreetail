import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Card, { CardContent } from 'material-ui/Card'
import Grow from 'material-ui/transitions/Grow'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  usersWrap: {
    maxWidth: '50rem'
  },
  card: {
    margin: '2rem',
    minWidth: '6rem'
  },
  center: {
    textAlign: 'center'
  }
})

const RegisterUser = ({users, classes, selectUser}) => {

  const availableUsers = users.filter(u => !u.isActive)

  return (
    <div className={classes.container}>

        {availableUsers.length > 0
          ? <Grid
              container
              className={classes.usersWrap}
              justify="space-around">
              {availableUsers.map((user, i) => (
                <Grow in={true} timeout={1000} key={i}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="title" align="center" gutterBottom color="textSecondary">
                      {`${user.fName} ${user.lName}`}
                      </Typography>
                      <div className={classes.center}>
                        <Button
                        color="primary"
                        onClick={()=> selectUser(i)}>Select</Button>
                      </div>
                      </CardContent>
                  </Card>
                </Grow>
              ))}
          </Grid>
          : <Typography variant="title" align="center">Sorry, all users are taken</Typography>}

    </div>
  )
}

RegisterUser.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string.isRequired,
      lName: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired
    })
  ),
  selectUser: PropTypes.func.isRequired
}


export default withStyles(styles)(RegisterUser)
