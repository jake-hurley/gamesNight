import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import * as firebase from "firebase/app"
import fireauth from "firebase/auth"
import firestore from "firebase/firestore"

 


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
