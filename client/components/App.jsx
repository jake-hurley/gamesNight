import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import NewEvent from './NewEvent'
import Event from './Event'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/newEvent" component={NewEvent} />
        <Route path="/user/event/:eventId" component={Event} />
      </Router>
    </>
  )
}

export default App
