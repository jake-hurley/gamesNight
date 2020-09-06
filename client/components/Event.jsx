import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import { getEventById, getAttendees } from '../api/api'

import Invite from './Invite'

export class Event extends Component {

  state = {
    event_name: '',
    game: '',
    date: '',
    attendees: []
  }


  componentDidMount () {
    // console.log(this.props)
    const eventId = this.props.match.params.eventId
    this.getEventData(eventId)
  }

  getEventData = (event) => {
    getEventById(event)
    .then(eventData => {
      this.setState({
        event_name: eventData.event_name,
        game: eventData.game,
        date: eventData.date,
        event_id: eventData.eventId,
        description: eventData.description
      })
    })

    getAttendees(event) 
      .then(users => {
        this.setState({
          attendees: users
        })
      })
  }

  render () {
    return (
      <>
        <div className='header-container'>
          <Link to={{pathname:'/user/home', state:{userData: this.props.location.state.userData }}} ><img className='back-arrow' src='arrow.svg'/></Link>
          <h3 className='event-title'>{this.state.event_name}</h3>
          <h4 className='date-time'>{this.state.date}</h4>
        </div>
        <div className='event-container'>
          <h4 className='location'>Location</h4>
          <h4 className='game'>Playing: {this.state.game}</h4>
          <p className='event-description'>
          {this.state.description}
          </p>
          <div className='attendees-container'>
            <h4 className='attendees-title'>Attendees</h4>
            <ul className='attendees-list'>
              {this.state.attendees.map(user => {
                return(
                  <li className='attendee' key={user.id}>{user.name}</li>
                )
              })}
            </ul>
          </div>
          <Invite />
        </div>
    </>
    )
  }
}

export default withRouter(Event)
