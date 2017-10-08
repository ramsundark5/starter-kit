/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { resetErrorMessage } from '../actions/CommonActions'
import HeaderComponent from '../components/HeaderComponent'

class Home extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <span> Hello world </span>
      </div>
    )
  }
}

export default Home
