import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/UserActions'
import FirebaseConfig from '../security/FirebaseConfig'
import firebase from 'firebase'
import 'firebaseui/dist/firebaseui.css'
import { Header, Image, Modal } from 'semantic-ui-react'

export class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const currentUser = firebase.auth().currentUser
    FirebaseConfig.getAuthUI().start('#firebaseui-auth', FirebaseConfig.getUIConfig())
  }

  render() {
    return (
      <div id="firebaseui-auth"></div>
    )
  }
}

{/* <Modal>
        <Modal.Header>Login modal</Modal.Header>
        <Modal.Content>
          <div id="firebaseui-auth"></div>
        </Modal.Content>
      </Modal> */}
const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {login})(Login)
