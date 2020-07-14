const path = require('path')
const express = require('express')

const events = require('./routes/events')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/events', events)
// server.use('api/v1/users', users)
// server.use('api/v1/userEvents', userEvents)

module.exports = server
