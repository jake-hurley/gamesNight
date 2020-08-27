import React, { Component } from 'react'
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
    const eventId = this.props.match.params.eventId
    this.getEventData(eventId)
  }

  getEventData = (event) => {
    getEventById(event)
    .then(eventData => {
      this.setState({
        event_name: eventData.event_name,
        game: eventData.game,
        date: eventData.date
      })
    })
    getAttendees(event) 
      .then(user => {
        this.setState({
          attendees: user
        })
      })
  }

  clickHandler = () => {
    console.log('pass')
  }
  
  render () {
    return (
      <>
        <div className='header'>
          <p>header</p>
        </div>
        <div className='event-container'>
          <h3 className='event-title'>{this.state.event_name}</h3>
          <h4 className='date'>{this.state.date}</h4>
          <h4 className='location'>Location</h4>
          <h4 className='game'>Playing: {this.state.game}</h4>
          <p className='event-description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
