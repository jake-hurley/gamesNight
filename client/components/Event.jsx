import React, { Component } from 'react'
import { withRouter } from "react-router"
import { getEventById, getAttendees } from '../api/api'

export class Event extends Component {

  state = {
    event_name: '',
    game: '',
    date: '',
    attendees: []
  }

  // eventId = this.match
  componentDidMount () {
    const eventId = this.props.match.params.eventId
    console.log(eventId)
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
  
  render () {
    return (
      <div>
        <h3>{this.state.event_name}</h3>
        <h4>When: {this.state.date}</h4>
        <h4>Playing: {this.state.game}</h4>
        <ul>
          {this.state.attendees.map(user => {
            return(
              <li>{user.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(Event)
