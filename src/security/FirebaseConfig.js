import firebase from 'firebase'
import firebaseui from 'firebaseui'
import * as Config from './Config'

const config = {
    apiKey: Config.FIREBASE_API_KEY,
    authDomain: "flashmastery.firebaseapp.com",
    databaseURL: "https://flashmastery.firebaseio.com",
    projectId: "flashmastery",
    storageBucket: "",
    messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)
const firebaseAuth =  firebase.auth()
//const firestore = firebase.firestore()

class FirebaseConfig{

  init(loginFunc){
    this.authUI = new firebaseui.auth.AuthUI(firebaseAuth)  
  }

  getAuthUI(){
      return this.authUI
  }

  getUIConfig(loginAction){
    const uiConfig = {
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // Do something.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          //store.dispatch(UserActions.login(currentUser));
          loginAction(currentUser)
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
    }
    return uiConfig
  }

} 

const firebaseConfig = new FirebaseConfig()
export {firebaseConfig, firebaseAuth}