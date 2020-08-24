import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUserEvents, getAttendees } from '../api/api'

export class UpcomingEvents extends Component {
    state = {
        events: [],
        attendeeCount: []
    }

    componentDidMount() {
        this.getEvents()
    }



    getEvents = () => {
        const userId = this.props.data.userId
        getUserEvents(userId)
        .then(events => {
            this.setState({
                events: events
            })
        })
        
    }

    goingCount = () => {
        this.state.events.map(event => {
            this.getAttendees(event.eventId)
            .then(guests => {
                this.setState({
                    going: [...this.state.going, guests.length]
                })
            })
            console.log(this.state)
    })
}

    dateConvert = (event, date) => {
        const dates = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
        let dateSplit = date.split('-')
        let dateIndex = Number(dateSplit[1] - 1)
        let newDate = dates[dateIndex] + ' ' + dateSplit[2] 
        return newDate
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
                                <h3 className='event-attendees'>{} Going</h3>
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
