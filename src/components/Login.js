import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/UserActions'
import {authUI} from '../security/FirebaseConfig'
import firebase from 'firebase'
import 'firebaseui/dist/firebaseui.css'

export class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const currentUser = firebase.auth().currentUser
    const {login} = this.props
    const uiConfig = {
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // Do something.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          login(currentUser)
          //return true;
        }
      },
      signInSuccessUrl: 'http://localhost:3000/profile',
      signInFlow: 'popup',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    };

    authUI.start('#firebaseui-auth', uiConfig)
  }

  render() {
    return (
      <div id="firebaseui-auth"></div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {login})(Login)
