import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/UserActions'
import FirebaseConfig from '../security/FirebaseConfig'
import firebase from 'firebase'
import 'firebaseui/dist/firebaseui.css'
import { Header, Image, Modal, Button, Icon } from 'semantic-ui-react'

export class Login extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    const currentUser = firebase.auth().currentUser
    FirebaseConfig.getAuthUI().start('#firebaseui-auth', FirebaseConfig.getUIConfig())
  }

  render() {
    return(
      <div id="firebaseui-auth"/>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

export default connect(mapStateToProps, {login})(Login)
