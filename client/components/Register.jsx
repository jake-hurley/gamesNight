import React, { Component } from 'react'
import { getUsers,addUser } from '../api/api'


export class Register extends Component {

    state = {
        userName: '',
        password: '',
        passwordCheck: ''
    }

    changeHandler = (ev)  => {
        const { name, value } = ev.target
        this.setState({
            [name]: value
        })
    }

    clickHandler = () => {
        if (this.state.password === this.state.passwordCheck) {
        getUsers()
        .then(users => {
            let userNameCheck = users.filter(user => user.name === this.state.userName)
            if (userNameCheck.length >= 1) {
                alert('username already exists')
            } else addUser(this.state)
        })
    }
}

    render () {
        return (
            <div>
                <h3>New User</h3>
                <input onChange={this.changeHandler} name='userName' placeholder='userName'></input>
                <input onChange={this.changeHandler} name='password' placeholder='password'></input>
                <input onChange={this.changeHandler} name='passwordCheck' placeholder='re-enter password'></input>
                <button onClick={() => this.clickHandler()}>Register</button>
            </div>
        )
    }
}

export default Register