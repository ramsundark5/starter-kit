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
export const authUI = new firebaseui.auth.AuthUI(firebase.auth())