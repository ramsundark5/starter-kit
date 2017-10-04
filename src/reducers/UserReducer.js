import * as AppConstants from '../constants/AppConstants'

const initialState = {
  data: null,
  isLoading: false
}

export default function UserState(state = initialState, { type, payload }) {
  switch (type) {
    case AppConstants.USER_LOGGING_IN:
      return { ...initialState, isLoading: true }
    case AppConstants.USER_LOGGED_IN:
      return { data: payload, isLoading: false }
    case AppConstants.USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
