import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getUserById } from '../api/api'

export class UpcomingEvents extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        const userId = this.props.data
        getUserEvents(userId)
        .then(events => {
            this.setState({
                events: events
            })
        })
    }

  render () {
    return (
      <div>
          <h1>Upcoming Events</h1>
              {this.state.events.map(event => {
                  return ( 
                    <div key={event.eventId}>
                        <Link to={`/user/event/${event.eventId}`}>
                            <h3 key={event.eventId}>{event.event_name}</h3>
                        </Link>
                        <h5 key={event.eventId}>{event.date}</h5>
                    </div>
                    )
              })}
          <Link to={`/user/${this.state.userName}/newEvent`}><button>Create Event</button></Link>
      </div>
    )
  }
}

export default UpcomingEvents
