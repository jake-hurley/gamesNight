import React, { Component } from 'react'
import { withRouter } from "react-router"

import { getAttendees  } from '../api/api'

export class Invite extends Component {

    componentDidMount () {
        const eventId = this.props.match.params.eventId
        this.setState({
            event_id: eventId
        })
    }

    changeHandler = (ev) => {
        const { name, value } = ev.target

        this.setState({
            [name]: value
        })
    }

    clickHandler = () => {
          console.log(this.state)
          getAttendees(this.state.event_id)
          .then(attendees => {
              attendees.map(user => {
                if(user.name === this.state.inviteUser) {
                    alert('user has already been invited')
                    return
                } else {
                    console.log('pass')
                }
              })  
          })

    }

  render () {
    return (
    <div>
        <input name='inviteUser' onChange={this.changeHandler} placeholder='Who would you like to invite?'></input>
        <button onClick={() => this.clickHandler()}>Invite!</button>
    </div>
    )
  }
}

export default withRouter(Invite)
