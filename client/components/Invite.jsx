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
        <input className='invite-input' name='inviteUser' autoComplete='off' onChange={this.changeHandler} placeholder='Invite Someone!'></input>
        <a className='invite-button' onClick={() => this.clickHandler()}>Invite!</a>
    </div>
    )
  }
}

export default withRouter(Invite)