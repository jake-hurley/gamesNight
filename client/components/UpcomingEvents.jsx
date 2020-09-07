import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getAttendees } from '../api/api'

export class UpcomingEvents extends Component {
    state = {
        events: []
    }

    userData = JSON.parse(localStorage.getItem('userData'))
    userId = this.userData.userId
  
    componentDidMount() {
        getUserEvents(this.userId)
        .then(events => {
            this.setState({
                events: events
            })
        })
    }
        

  render () {
    return (
      <div className='upcoming-events'>
          <h1 className='upcoming-events-title'>Upcoming Events</h1>
              {this.state.events.map(event => {
                  return (
                    <Link className='event-link' to={{pathname: `/user/event/${event.eventId}`, state: {userData: this.userData} }}> 
                        <div className='event' key={event.eventId}>
                            <h5 className='event-date' key={event.eventId}>{event.date}</h5>
                            <div className='event-details'>
                                <h3 className='event-name' key={event.eventId}>{event.event_name}</h3>
                                <h4 className='event-attendees'>{event.guestCount} Going</h4>
                            </div>
                            <img className='event-icon' src='Ellipse.svg'/>
                        </div>
                    </Link>
                    )
              })
            }
      </div>
      )
    }
}

export default UpcomingEvents
