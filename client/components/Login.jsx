import React, { Component } from 'react'
import { withRouter } from "react-router"
import { Link, Redirect } from 'react-router-dom'
import { getUsers } from '../api/api'

import Home from './Home'

export class Login extends Component {

    state = {
        userName: '',
        password: '',
        userData: {},
        loginCheck: true
        // userData: { userId: 1, name: 'Jake', password: 'hurley'} 
    }

    componentDidMount () {
        getUsers()
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
                    this.setState({
                        userData: users[i]
                    })
                    console.log('pass')
                    // return <Redirect to={{pathname: '/user/home', state: {userData: this.state.userData}}}/>
                    this.props.history.push({ 
                        pathname: '/user/home', state: {userData: this.state.userData}
                       })
                } else {
                    console.log('Username or password is incorrect')
                    this.setState({loginCheck: false})
                }
            }
        })
    }

    render () {
        if(this.state.loginCheck === true){
        return (
            <div className='login-container'>
                {/* ADD LOGO OF GAMESNIGHT */}
                <h3 className='login-title'>Login</h3>
                <input className='user-input' onChange={this.changeHandler} name='userName' placeholder='userName'></input>
                <input className='user-input' type='password' onChange={this.changeHandler} name='password' placeholder='password'></input>
                <button className='login-button' onClick={() => this.clickHandler()}>Login</button>
                <h5 className='new-here'>New here?</h5>
                <Link className='register' to='/user/register'>Register</Link>
            </div>
        )
    } else {
        return (
            <div className='login-container'>
                {/* ADD LOGO OF GAMESNIGHT */}
                <h3 className='login-title'>Login</h3>
                <input className='user-input' onChange={this.changeHandler} name='userName' placeholder='userName'></input>
                <input className='user-input' type='password' onChange={this.changeHandler} name='password' placeholder='password'></input>
                <p className='login-error'>UserName or Password is incorrect</p>
                <button className='login-button' onClick={() => this.clickHandler()}>Login</button>
                <h5 className='new-here'>New here?</h5>
                <Link className='register' to='/user/register'>Register</Link>
            </div>
            )
        }
    }
}

export default withRouter(Login)