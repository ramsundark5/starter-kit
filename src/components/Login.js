import React, { Component } from 'react'
import { connect } from 'react-redux'
import FirebaseConfig from '../security/FirebaseConfig'
import 'firebaseui/dist/firebaseui.css'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/UserActions'

export class Login extends Component {

  constructor(props, context){
    super(props, context)
    this.loginFn = props.actions.login
  }

  componentDidMount(){
    FirebaseConfig.getAuthUI().start('#firebaseui-auth', FirebaseConfig.getUIConfig(this.loginFn))
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
