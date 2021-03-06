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
      if(this.state.events.length > 0){
        return (
        <div className='upcoming-events'>
            <h1 className='upcoming-events-title'>Upcoming Events</h1>
                {this.state.events.map(event => {
                    return (
                        <Link className='event-link reveal' to={{pathname: `/user/event/${event.eventId}`, state: {userData: this.userData} }} key={event.eventId}> 
                            <div className='event reveal' key={event.eventId}>
                                <h5 className='event-date reveal' key={event.eventId}>{event.date}</h5>
                                <div className='event-details reveal'>
                                    <h3 className='event-name reveal' key={event.eventId}>{event.event_name}</h3>
                                    <p className='event-playing reveal'>Playing {event.game}</p>
                                </div>
                                <img className='event-icon reveal' src='dice.svg'/>
                            </div>
                        </Link>
                        )
                    })
                    }
            </div>
            )
        } else {
            return (
                <div className='upcoming-events'>
                    <h2 className='upcoming-events-title'>No Upcoming Events</h2>
                </div>
            )
        }
    }
    }

export default UpcomingEvents
