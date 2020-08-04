import React, { Component } from 'react'

import { getAttendees } from '../api/api'
import UpcomingEvents from './UpcomingEvents'

export class Home extends Component {

  componentDidMount () {
  // getAttendees(1)
  // .then(response => console.log(response))
  }

  render () {
    return (
    <>
      <h1>Gday</h1>
      <UpcomingEvents />
    
    </>
    )
  }
}

export default Home
