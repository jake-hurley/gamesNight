import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getUserById } from '../api/api'

export class UpcomingEvents extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        const userId = this.props.data.userId
        console.log(this.props.data)
        getUserEvents(userId)
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
                    <Link className='event-link' to={`/user/event/${event.eventId}`}> 
                        <div className='event' key={event.eventId}>
                            <h5 className='event-date' key={event.eventId}>{event.date}</h5>
                            <div className='event-details'>
                                <h3 className='event-name' key={event.eventId}>{event.event_name}</h3>
                                <h3 className='event-attendees'>7 Going</h3>
                            </div>
                            <img className='event-icon' src='Ellipse.svg'/>
                        </div>
                    </Link>
                    )
              })}
          <Link to={{ pathname : `/user/newEvent`, state: this.props.data}}><button>Create Event</button></Link>
      </div>
    )
  }
}

export default UpcomingEvents
