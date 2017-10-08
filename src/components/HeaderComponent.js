/* eslint-disable no-undef */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Header, Icon, Segment, Label } from 'semantic-ui-react'
import { userIsAuthenticated, userIsNotAuthenticated } from '../security/Auth'
import * as UserActions from '../actions/UserActions'

const LoginLink = userIsNotAuthenticated(() => <Link  to="/login">Sign in</Link>)
const LogoutLink = userIsAuthenticated(({ logoutFn }) => <a href="javascript:void(0)" onClick={() => logoutFn()}>Logout</a>)
const UserName = userIsAuthenticated(({ user }) => (
  <div>
    <Label>
      <Icon name='user'/> {getUserName(user)}
    </Label>
  </div>
))

class HeaderComponent extends Component {

  render() {
    const { actions, user } = this.props
    return (
      <Segment clearing attached='top' >
          <Header as='h4' floated='left'>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </Header>
          <Header as='h4' floated='right'>
            <LoginLink />
            <UserName user={user}/>
            <LogoutLink logoutFn={actions.logout} user={user}/>
          </Header>
      </Segment>
    )
  }
}

const getUserName = user => {
  if (user) {
    return `Hi, ${user.displayName}`
  }
  return null
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
