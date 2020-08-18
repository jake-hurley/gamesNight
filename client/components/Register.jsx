import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        console.log(this.state)
    }

    clickHandler = () => {
        if (this.state.password === this.state.passwordCheck) {
        getUsers()
        .then(users => {
            for(var i = 0; i < users.length; i++){
                if(users[i].name !== this.state.userName) {
                    addUser(this.state)
                    break
                } else {
                    alert('userName is taken') 
                    break 
                } 
            } 
        })
    } else alert('password doesnt match')
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