import * as UserActions from '../../actions/UserActions'
import * as AppConstants from '../../constants/AppConstants'
import {firebaseAuth} from '../../security/FirebaseConfig'

describe('User Actions', () => {
  it('login should create USER_LOGGED_IN action', () => {
    expect(UserActions.login({name: 'test user'})).toEqual({
      type: 'USER_LOGGED_IN',
      payload: {name: 'test user'}
    })
  })

  it('logout should create USER_LOGGED_OUT action', async () => {
    const signOutSpy = jest.spyOn(firebaseAuth, 'signOut')
    let response = await UserActions.logout()
    expect(signOutSpy).toBeCalled()
    expect(response).toEqual({
      type: 'USER_LOGGED_OUT',
      payload: null
    })
  })

})