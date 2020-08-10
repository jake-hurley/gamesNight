import React, { Component } from 'react'
import { withRouter } from "react-router"
import { getEventById } from '../api/api'

export class Event extends Component {

  state = {
    event_name: '',
    game: '',
    date: ''
  }

  // eventId = this.match
  componentDidMount () {
    const eventId = this.props.match.params.eventId
    console.log(eventId)
    getEventById(eventId)
    .then(eventData => {
      this.setState({
        event_name: eventData.event_name,
        game: eventData.game,
        date: eventData.date
      })
    })

  }
  
  render () {
    return (
      <div>
        <h3>{this.state.event_name}</h3>
        <h4>When: {this.state.date}</h4>
        <h4>Playing: {this.state.game}</h4>
      </div>
    )
  }
}

export default withRouter(Event)
