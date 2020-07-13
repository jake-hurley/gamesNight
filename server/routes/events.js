const express = require('express')

const db = require('../db/events')

const router = express.Router()

router.get('/event', (req, res) => {
  // const eventId = req.params
  // console.log(eventId)

  db.getEvents()
    .then(response => {
      console.log(response.body)
      res.json(response.body)
    })
})


module.exports = router
