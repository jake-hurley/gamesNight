import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import NewEvent from './NewEvent'
import Event from './Event'
import Login from './Login'
import Register from './Register'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/user/register" component={Register} />
        <Route exact path="/home/:userId" component={Home} />
        <Route exact path="/user/:userName/newEvent" component={NewEvent} />
        <Route path="/user/event/:eventId" component={Event} />
      </Router>
    </>
  )
}

export default App
