import * as AppConstants from '../constants/AppConstants'
import {firebaseAuth} from '../security/FirebaseConfig'

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
