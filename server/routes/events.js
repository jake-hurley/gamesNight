const express = require('express')

const db = require('../db/events')

const router = express.Router()

router.get('/', (req, res) => {
  db.getEvents()
    .then(response => {
      console.log(response.body)
      res.json(response)
    })
})

router.get('/:eventId', (req, res) => {
  const { eventId } = req.params
  db.getEventById(eventId)
    .then(response => {
      res.json(response)
    })
})

module.exports = router
