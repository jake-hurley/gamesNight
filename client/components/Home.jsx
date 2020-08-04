import React, { Component } from 'react'

import { getAttendees } from '../api/api'

export class Home extends Component {

  componentDidMount () {
  getAttendees(1)
  .then(response => console.log(response))
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
