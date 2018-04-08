import React from 'react'
import CssBaseline from 'material-ui/CssBaseline'
import { connect } from 'react-redux'
import actions from '../actions'
import {MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import lightBlue from 'material-ui/colors/lightBlue'
import blueGrey from 'material-ui/colors/blueGrey'

import Header from './Header'

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


const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <CssBaseline/>
      <Header/>
    </div>
  </MuiThemeProvider>
)

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
