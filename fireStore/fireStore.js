import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC80SBFq5uHrrxAj7KHH-epbxYmKVZLHz0",
  authDomain: "gamesnight-ad564.firebaseapp.com",
  databaseURL: "https://gamesnight-ad564.firebaseio.com",
  projectId: "gamesnight-ad564",
  storageBucket: "gamesnight-ad564.appspot.com",
  messagingSenderId: "235249501730",
  appId: "1:235249501730:web:a12dc66f1271e1bedbac7b",
  measurementId: "G-SR7LQNMXPK"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase