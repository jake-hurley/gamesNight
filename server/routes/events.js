const express = require('express')

const db = require('../db/events')

const router = express.Router()

router.get('/event', (req, res) => {

  db.getEvents()
    .then(response => {
      console.log(response)
      res.json(response)
        // res.status(200).json(item)
      })
    .catch(err => {
      console.error(err.message)
      res.status(500).json("An unexpected error has occurred and we're looking into it")
    })
  })

router.get('/event/:eventId', (req, res) => {
  const eventId = req.params.eventId
  console.log(eventId)

  db.getEventById(eventId)
  .then(response => {
    res.status(200).json(response)
  })
})



module.exports = router
