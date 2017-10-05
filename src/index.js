import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Root />
      </Provider>,
      document.getElementById('root')
    )
  })
}
