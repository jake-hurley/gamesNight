import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getUserById } from '../api/api'
import UpcomingEvents from './UpcomingEvents'


export class Home extends Component {
  state = {
    name: ''
  }

  userId = this.props.match.params.userId

  componentDidMount () {
  const userId = this.props.match.params.userId
  getUserById(userId)
  .then(user => {
      this.setState({
          name: user.name
      })
  })
  getUserEvents(this.userId)
  .then(response => { 
    if(response.length >= 1) {
      this.setState({
        name: response[0].name,
        userId: this.userId
    })
    }
  })
  }

  render () {
    return (
    <>
      <h1>Gday {this.state.name}</h1>
      <UpcomingEvents data={this.userId} />
      <Link to='/'><p>Log out</p></Link>
    
    </>
    )
  }
}

export default Home
