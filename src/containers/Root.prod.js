import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routes from './Routes'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Routes />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
