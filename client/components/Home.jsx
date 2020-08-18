import React, { Component } from 'react'

import { getUserEvents } from '../api/api'
import UpcomingEvents from './UpcomingEvents'


export class Home extends Component {
  state = {
    name: ''
  }

  userId = this.props.match.params.userId

  componentDidMount () {
  getUserEvents(this.userId)
  .then(response => { 
    this.setState({
      name: response[0].name,
      userId: this.userId
    })
  })
  }

  render () {
    return (
    <>
      <h1>Gday {this.state.name}</h1>
      <UpcomingEvents data={this.userId} />
    
    </>
    )
  }
}

export default Home
