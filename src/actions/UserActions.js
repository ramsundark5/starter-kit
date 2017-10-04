import * as AppConstants from '../constants/AppConstants'
import { CALL_API, Schemas } from '../middleware/api'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = login => ({
  [CALL_API]: {
    types: [ AppConstants.USER_LOGGING_IN, AppConstants.USER_LOGGED_IN, AppConstants.USER_LOGGED_OUT ],
    endpoint: `users/${login}`,
    schema: Schemas.USER
  }
})

export function login(loggedInUser) {
  return {
    type: AppConstants.USER_LOGGED_IN,
    payload: loggedInUser
  }
}

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
  const user = getState().entities.users[login]
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
    return null
  }

  return dispatch(fetchUser(login))
}