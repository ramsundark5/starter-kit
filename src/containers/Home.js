/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    //const { children } = this.props
    return (
      <div>
        <span> Hello world </span>
      </div>
    )
  }
}

export default Home
