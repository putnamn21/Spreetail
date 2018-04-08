import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from 'material-ui/CssBaseline'
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import lightBlue from 'material-ui/colors/lightBlue'
import lime from 'material-ui/colors/lime'

import Header from './Header'
import RegisterUser from './RegisterUser'
import withUsers from '../containers/Users'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: lime[500],
    },
  },
})

const pageBackground = {
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const App = ({currentUser, users, selectUser}) => (
  <MuiThemeProvider theme={theme}>
    <div style={pageBackground}>
      <CssBaseline/>
      <Header user={currentUser !== null ? users[currentUser] : null} />
      {currentUser !== null
        ?  <p>Hello Worl</p>
        :  <RegisterUser users={users} selectUser={selectUser}/>
      }
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  currentUser: PropTypes.number,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string.isRequired,
      lName: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired
    })
  ),
  selectUser: PropTypes.func.isRequired
}

export default withUsers(App)
