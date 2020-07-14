const path = require('path')
const express = require('express')

const events = require('./routes/events')
const users = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/events', events)
server.use('/api/v1/users', users)
// server.use('api/v1/userEvents', userEvents)

module.exports = server
