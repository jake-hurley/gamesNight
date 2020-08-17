import React, { Component } from 'react'
import { withRouter } from "react-router"
import { addEvent, inviteUser, getAttendees } from '../api/api'

export class NewEvent extends Component {

  state = {
    event_name: '',
    game: '',
    date: '',
  }

  componentDidMount() {
    const userName = this.props.match.params.userName
    this.setState({
      userName: userName
    })
  }

  changeHandler = (ev) => {
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
  }

  clickHandler () {
    addEvent(this.state)
    // ADDS CREATOR AS AN ATTENDEE TO THIS EVENT
    .then(response => {
      inviteUser(response, this.state.userName)
    })
    
  }

  render () {
    return (
      <div>
        <h1>New Event</h1>
        <input name='event_name' placeholder='Event Name' onChange={this.changeHandler}></input>
        <input name='date' type='date' placeholder='Date' onChange={this.changeHandler}></input>
        <select name='game' onChange={this.changeHandler}>
          <option>What Game are you playing?</option>
          <option value='Mario Kart'>Mario Kart</option>
          <option value='Catan'>Catan</option>
          <option value='Mysterium'>Mysterium</option>
          <option value='Warzone'>Warzone</option>
          <option value='Dungeons and Dragons'>Dungeons and Dragons</option>

        </select>
        <button onClick={() => this.clickHandler()}>Create Event!</button>

      </div>
    )
  }
}

export default withRouter(NewEvent)
