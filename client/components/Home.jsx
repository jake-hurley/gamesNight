import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getUserById } from '../api/api'
import UpcomingEvents from './UpcomingEvents'


export class Home extends Component {
  state = {
    name: '',
    date: new Date().toLocaleDateString()
  }

  userId = this.props.data.userId

  componentDidMount () {
  const userId = this.props.data.userId
  console.log(userId)
  // const userId = this.props.match.params.userId
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
      <div className='header-container'>
        <h1 className='name'>Gday {this.state.name}</h1>
        <h2>{this.state.date}</h2>
        <Link className='logout' to='/'><p>Log out</p></Link>
      </div>
      <UpcomingEvents data={this.props.data} />
    </>
    )
  }
}

export default Home
