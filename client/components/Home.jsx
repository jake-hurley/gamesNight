import React, { Component } from 'react'

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
const db = firebase.firestore()

export class Home extends Component {

  componentDidMount () {
   this.checkData()
  }

  checkData = () => {
    const data = db.collection("users").doc('0')
    data.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
      console.log("Error getting document:", error);
  })
  }
  render () {
    return (
      <div>
        <h1>Gday</h1>
      </div>
    )
  }
}

export default Home
