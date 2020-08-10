import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents } from '../api/api'

export class UpcomingEvents extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        getUserEvents(1)
        .then(response => {
            this.setState({
                events: response
            })
        })
    }

  render () {
    return (
      <div>
          <h1>Upcoming Events</h1>
              {this.state.events.map(event => {
                  return ( 
                    <div>
                        <Link to={`/user/event/${event.eventId}`}>
                            <h3>{event.event_name}</h3>
                        </Link>
                        <h5>{event.date}</h5>
                    </div>
                    )
              })}
          <Link to={`/user/newEvent`}><button>Create Event</button></Link>
      </div>
    )
  }
}

export default UpcomingEvents
