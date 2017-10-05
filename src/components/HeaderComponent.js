/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Header, Icon, Segment } from 'semantic-ui-react'

class HeaderComponent extends Component {

  render() {
    const { children } = this.props
    return (
      <Segment clearing attached='top' >
          <Header as='h4' floated='left'>
             Home
          </Header>
          <Header as='h4' floated='right'>
            <Icon name='settings' />
             Sign In
          </Header>
      </Segment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data
})

export default withRouter(connect(mapStateToProps, null)(HeaderComponent))
