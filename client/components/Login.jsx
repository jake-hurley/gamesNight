import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../api/api'

export class Login extends Component {

    state = {
        userName: '',
        password: ''
    }

    changeHandler = (ev) => {
        const { name, value } = ev.target
        this.setState({
            [name]: value
        })
    }

    clickHandler = () => {
        getUsers()
        .then(users => {
            for(var i = 0; i < users.length; i++){
                if((users[i].name === this.state.userName) && (users[i].password === this.state.password)) {
                    this.props.history.push(`/home/${users[i].userId}`)
                    break
                } else {
                    alert('Username or password is incorrect')
                    break
                }
            }
        })
    }

    render () {
        return (
            <div>
                <h3>Login</h3>
                <input onChange={this.changeHandler} name='userName' placeholder='userName'></input>
                <input onChange={this.changeHandler} name='password' placeholder='password'></input>
                <button onClick={() => this.clickHandler()}>Login</button>
                <h5>New here?</h5>
                <Link to='/user/register'><button>Register</button></Link>
            </div>
        )
    }
}

export default Login