import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getUserById } from '../api/api'
import UpcomingEvents from './UpcomingEvents'


export class Home extends Component {
  state = {
    name: '',
    date: new Date().toLocaleDateString()
  }

  userData = JSON.parse(localStorage.getItem('userData'))
  userId = this.userData.userId

  componentDidMount () {
    getUserEvents(this.userId)
    .then(response => { 
      if(response.length >= 1) {
        this.setState({
          name: response[0].name
      })
      }
    })
  }

  clickHandler = () => {
    localStorage.removeItem('userData')
  }

  render () {
    return (
    <>
      <div className='header-container'>
        <h1 className='name'>Hi {this.state.name}</h1>
        <Link className='logout' to='/' onClick={this.clickHandler}>Log out</Link>
        <h2 className='date'>{this.state.date}</h2>
        <Link className='new-event' to={{ pathname : `/user/newEvent`, state: this.userData}}>Create Event</Link>
      </div>
      <UpcomingEvents data={this.userData} />
    </>
    )
  }
}

export default Home
