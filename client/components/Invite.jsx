import React, { Component } from 'react'
import { withRouter } from "react-router"

import { getAttendees, inviteUser, getUsers  } from '../api/api'

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
        getAttendees(this.state.event_id)
           .then(attendees => {
                let found = attendees.find(user => user.name === this.state.inviteUser)
                if(found) {
                 alert('user is already attending')
                } else {
                    inviteUser(this.state.event_id, this.state.inviteUser)
                }
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