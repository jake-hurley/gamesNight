const express = require('express')

const db = require('../db/userEvents')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllUserEvents()
    .then(response => {
      res.json(response)
    })
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  db.getUserEvents(userId)
    .then(response => {
      res.json(response)
    })
})

router.get('/attendees/:eventId', (req, res) => {
  const { eventId } = req.params
  db.getAttendees(eventId)
    .then(response => {
      res.json(response)
    })
})

module.exports = router
