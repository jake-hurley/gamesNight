import React, { Component } from 'react'

import { addEvent } from '../../server/db/events'

export class NewEvent extends Component {

  state = {
    event_name: '',
    game: '',
    date: ''
  }

  changeHandler (ev) {
    const { name, value } = ev.target
    this.setState({
      [name]: value
    })
    console.log(this.state)

  }

  clickHandler () {
    addEvent(this.state)
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <h1>New Event</h1>
        <input name='even_name' placeholder='Event Name' onChange={() => this.changeHandler()}></input>
        <input name='date' type='date' placeholder='Date' onChange={() => this.changeHandler()}></input>
        <select name='game' onChange={() => this.changeHandler()}>
          <option value='Mario Kart'>Mario Kart</option>
          <option value='Catan'>Catan</option>
          <option value='Mysterium'>Mysterium</option>
          <option value='Warzone'>Warzone</option>
        </select>
        <button onClick={() => this.clickHandler()}>Create Event!</button>

      </div>
    )
  }
}

export default NewEvent
