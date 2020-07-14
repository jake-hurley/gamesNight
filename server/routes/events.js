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


module.exports = router
