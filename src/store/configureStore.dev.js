import { createStore, applyMiddleware } from 'redux'
import asyncAwait from '../middleware/asyncAwait'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(asyncAwait, api, createLogger())
    )
  )


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default new configureStore()
