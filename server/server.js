const path = require('path')
const express = require('express')

const server = express()
const events = require('./routes/events')
const users = require('./routes/users')

server.use('/api/v1', events)
server.use('/api/v1', users)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
