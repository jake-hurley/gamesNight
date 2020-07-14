const path = require('path')
const express = require('express')

const events = require('./routes/events')
const users = require('./routes/users')
const userEvents = require('./routes/userEvents')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/events', events)
server.use('/api/v1/users', users)
server.use('/api/v1/ue', userEvents)
server.use('/api/v1/newuser', users)

module.exports = server
