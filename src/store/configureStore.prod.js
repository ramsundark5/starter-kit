import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import asyncAwait from '../middleware/asyncAwait'
import api from '../middleware/api'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(asyncAwait, api)
)

export default new configureStore()
