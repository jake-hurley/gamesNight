const express = require('express')

const db = require('../db/userEvents')

const router = express.Router()

router.get('/userEvents/:userId', (req, res) => {
    const userId = req.params.userId
    db.getUserEvents(userId)
    .then(response => {
        res.status(200).json(response)
    })
})

router.get('/userEvents/attendees/:eventId', (req, res) => {
    const eventId = req.params.eventId
    db.getAttendees(eventId)
    .then(response => {
        res.status(200).json(response)
    })

})

router.post('/userEvents/:eventId/:userName', (req, res) => {
    const eventId = req.params.eventId
    const userName = req.params.userName
    db.getUserByName(userName)
    .then(response => {
        if(response){
        db.inviteUser(eventId, response.userId)
        .then(response => {
            res.status(200).json(response)
            
    })
    } else console.log('user does not exist!')
})
})

module.exports = router