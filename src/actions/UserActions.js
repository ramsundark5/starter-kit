import * as AppConstants from '../constants/AppConstants'
import { CALL_API, Schemas } from '../middleware/api'
import {firebaseAuth} from '../security/FirebaseConfig'
/* 
// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = loginId => ({
  [CALL_API]: {
    types: [ AppConstants.USER_LOGGING_IN, AppConstants.USER_LOGGED_IN, AppConstants.USER_LOGGED_OUT ],
    endpoint: `users/${loginId}`,
    schema: Schemas.USER
  }
}) */

export function login(loggedInUser) {
  return {
    type: AppConstants.USER_LOGGED_IN,
    payload: loggedInUser
  }
}

export async function logout(){
  await firebaseAuth.signOut()
  return {
    type: AppConstants.USER_LOGGED_OUT,
    payload: null
  }
}

/* // Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadUser = (loginId, requiredFields = []) => (dispatch, getState) => {
  const user = getState().entities.users[login]
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
    return null
  }

  return dispatch(fetchUser(loginId))
} */