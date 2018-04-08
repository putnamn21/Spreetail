import React from 'react'
import actions from '../actions'
import { connect } from 'react-redux'


const withUsers = (Child) => props => <Child {...props}/>

const mapStateToProps = ({users, currentUser}) => {
  return ({
    users,
    currentUser
  })
}

const mapDispatchToProps = {
  selectUser: actions.selectUser
}

export default (Child) => connect(mapStateToProps, mapDispatchToProps)(withUsers(Child))
