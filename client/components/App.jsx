import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import NewEvent from './NewEvent'
const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/newEvent" component={NewEvent} />
      </Router>
    </>
  )
}

export default App
