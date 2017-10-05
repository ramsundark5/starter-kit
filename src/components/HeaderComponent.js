/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Header, Icon, Segment } from 'semantic-ui-react'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
  userIsAuthenticated, userIsNotAuthenticated } from '../security/Auth'

//const UserName = ({ user }) => (<div className={styles.username}>{getUserName(user)}</div>)
const LoginLink = userIsNotAuthenticated(() => <Link  to="/login">Login</Link>)
//const LogoutLink = userIsAuthenticated(({ logout }) => <a href="#" onClick={() => logout()}>Logout</a>)

class HeaderComponent extends Component {

  render() {
    const { children } = this.props
    return (
      <Segment clearing attached='top' >
          <Header as='h4' floated='left'>
             Home1
          </Header>
          <Header as='h4' floated='right'>
            <Icon name='settings' />
            <LoginLink />
          </Header>
          <div id="firebaseui-auth"></div>
      </Segment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data
})

export default withRouter(connect(mapStateToProps, null)(HeaderComponent))
