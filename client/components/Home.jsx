import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import UpcomingEvents from './UpcomingEvents'


export class Home extends Component {

  userData = JSON.parse(localStorage.getItem('userData'))
  userId = this.userData.userId

  state = {
    name: this.userData.name,
    date: new Date().toLocaleDateString()
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
