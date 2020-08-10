const express = require('express')

const db = require('../db/events')

const router = express.Router()

router.get('/event', (req, res) => {

  db.getEvents()
    .then(response => {
      res.status(200).json(response)
      })
    .catch(err => {
      console.error(err.message)
      res.status(500).json("An unexpected error has occurred and we're looking into it")
    })
  })

router.get('/event/:eventId', (req, res) => {
  const eventId = req.params.eventId
  db.getEventById(eventId)
  .then(response => {
    if(typeof response === 'object')
    res.status(200).json(response)
    else res.status(500).json('Event does not exist!')
  })
  .catch(err => {
    console.error(err.message)
    res.status(500).json("An unexpected error has occurred and we're looking into it")
  })
})

router.post('/newEvent', (req, res) => {
  // const newEvent = {
  //   event_name: 'killer Catan',
  //   date: '25-01-2020'
  // }
  const newEvent = req.body
  db.addEvent(newEvent)
  .then(event => {
    res.status(200).json(event)
  })
  .catch(err => {
    console.error(err.message)
    res.status(500).json("An unexpected error has occurred and we're looking into it")
  })
})



module.exports = router
