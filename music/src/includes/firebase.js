import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAAIiaRslJsLiFUewtB8MtVh6kM7y8wH4w',
  authDomain: 'music-8eea1.firebaseapp.com',
  projectId: 'music-8eea1',
  storageBucket: 'music-8eea1.appspot.com',
  appId: '1:820746421549:web:e88af20efaa916efc1bfa4',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
}
