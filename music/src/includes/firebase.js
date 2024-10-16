import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAAIiaRslJsLiFUewtB8MtVh6kM7y8wH4w',
  authDomain: 'music-8eea1.firebaseapp.com',
  projectId: 'music-8eea1',
  storageBucket: 'music-8eea1.appspot.com',
  appId: '1:820746421549:web:e88af20efaa916efc1bfa4',
}

export default firebase.initializeApp(firebaseConfig)
