import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}

export default App
