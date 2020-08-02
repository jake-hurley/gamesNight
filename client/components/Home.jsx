import React, { Component } from 'react'

import firebase from '../../fireStore/fireStore.js'

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
