import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import {firebaseConfig} from './security/FirebaseConfig'


firebaseConfig.init()

ReactDOM.render(
  <Provider store={configureStore}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    ReactDOM.render(
      <Provider store={configureStore}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  })
}
