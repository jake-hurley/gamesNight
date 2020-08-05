import React, { Component } from 'react'

import { getUserEvents } from '../api/api'
import UpcomingEvents from './UpcomingEvents'

export class Home extends Component {

  state = {
    name: ''
  }

  componentDidMount () {
  getUserEvents(1)
  .then(response => { 
    this.setState({
      name: response[0].name
    })
  })
  }

  render () {
    return (
    <>
      <h1>Gday {this.state.name}</h1>
      <UpcomingEvents />
    
    </>
    )
  }
}

export default Home
