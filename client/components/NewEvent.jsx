import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Link, useHistory } from 'react-router-dom'

import { addEvent, inviteUser, getAttendees, getEvents } from '../api/api'

export class NewEvent extends Component {

  state = {
    event_name: '',
    game: '',
    date: '',
  }

  userData = JSON.parse(localStorage.getItem('userData'))
  userName = this.userData.name

  componentDidMount() {
    this.setState({
      userName: this.userName
    })
  }

  changeHandler = (ev) => {
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
  }

  checkForInput = () => {
    if (this.state.event_name.length > 0){

    }
  }

  clickHandler () {
    addEvent(this.state)
    getEvents()
    .then(events => {
      inviteUser(events[events.length - 1].eventId, this.state.userName)
    })
    setTimeout(() =>  this.props.history.push({ 
      pathname: '/user/home', state: {userData: this.userData}
     }), 100)    
  }

  render () {
    return (
        <div className='new-event-container' >
          <Link to='/user/home'><img className='back-arrow' src='arrow.svg'/></Link>
          <h1 className='new-event-title'>New Event</h1>
          <input className='user-input' name='event_name' placeholder='Event Name' onChange={this.changeHandler}></input>
          <input className='date-input' name='date' type='date' placeholder='Date' onChange={this.changeHandler}></input>
          <textarea className='description-input' name='description' type='description' placeholder='Description' onChange={this.changeHandler}/>
          <select className='game-dropdown' name='game' onChange={this.changeHandler}>
            <option>Game?</option>
            <option value='Mario Kart'>Mario Kart</option>
            <option value='Catan'>Catan</option>
            <option value='Mysterium'>Mysterium</option>
            <option value='Warzone'>Warzone</option>
            <option value='Dungeons and Dragons'>Dungeons and Dragons</option>
          </select>
          <button className='new-event-button' onClick={() => this.clickHandler()}>Create Event!</button>
          </div>
    )
  }
}

export default withRouter(NewEvent)
