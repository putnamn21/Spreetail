import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from 'material-ui/CssBaseline'
import { connect } from 'react-redux'
import actions from '../actions'
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import lightBlue from 'material-ui/colors/lightBlue'
import blueGrey from 'material-ui/colors/blueGrey'

import Header from './Header'
import RegisterUser from './RegisterUser'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: blueGrey[300],
    },
  },
})

const pageBackground = {
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const App = ({currentUser, users, selectUser}) => {console.log(currentUser, users);return(
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
)}

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

const mapStateToProps = (state) => {
  return ({
    users: state.users,
    currentUser: state.currentUser
  })
}

const mapDispatchToProps = {
  selectUser: actions.selectUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
