const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.get('/users', (req, res) => {
    db.getUsers()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.error(err.message)
        res.status(500).json("An unexpected error has occurred and we're looking into it")
      })
})

router.get('/users/:userId', (req, res) => {
    const userId = req.params.userId
    db.getUserById(userId)
    .then(response => {
        if(response)
        res.status(200).json(response)
        else res.status(500).json('User does not exist!')
    })
    .catch(err => {
        console.error(err.message)
        res.status(500).json("An unexpected error has occurred and we're looking into it")
      })
})


module.exports = router