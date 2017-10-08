/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Header, Icon, Segment } from 'semantic-ui-react'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
  userIsAuthenticated, userIsNotAuthenticated } from '../security/Auth'
import * as UserActions from '../actions/UserActions'

//const UserName = ({ user }) => (<div className={styles.username}>{getUserName(user)}</div>)
const LoginLink = userIsNotAuthenticated(() => <Link  to="/login">Login</Link>)
const LogoutLink = userIsAuthenticated(({ logoutFn }) => <a href="#" onClick={() => logoutFn()}>Logout</a>)

class HeaderComponent extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { children, actions } = this.props
    return (
      <Segment clearing attached='top' >
          <Header as='h4' floated='left'>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </Header>
          <Header as='h4' floated='right'>
            <Icon name='settings' />
            <LoginLink />
            <LogoutLink logoutFn={actions.logout} />
          </Header>
      </Segment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
