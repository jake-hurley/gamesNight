const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(response => {
      res.json(response)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getUserById(id)
    .then(response => {
      res.json(response)
    })
})

router.post('/', (req, res) => {
  const newUser = {
    name: req.body.name
  }
  db.addUser(newUser)
    .then(response => {
      res.json('added!')
    })
})

module.exports = router
