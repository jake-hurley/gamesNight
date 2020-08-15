import request from 'superagent'
import consume from './requestor'

const baseURL = 'http://localhost:3000/api/v1'

const acceptJsonHeader = { Accept: 'application/json' }

export function getAttendees (eventId) {
    return request
    .get(`${baseURL}/userEvents/attendees/${eventId}`)
    .then(response => {
        return response.body
    })
}

export function getUserEvents(userId) {
    return request
    .get(`${baseURL}/userEvents/${userId}`)
    .then(response => {
        return response.body
    })
}

export function addEvent (eventObject) {
    console.log(JSON.stringify(eventObject))
    return request
    .post(`${baseURL}/newEvent`)
    .type('form')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(eventObject)
    .end(function(err, res){
    console.log(res.error)
    })
}

export function getEventById (eventId) {
    return request
    .get(`${baseURL}/event/${eventId}`)
    .then(response => {
        console.log(response)
        return response.body
    })
}

export function inviteUser (eventId, userName) {
    console.log(eventId, userName)
    let userObject = {eventId, userName}
    return request
    .post(`${baseURL}/userEvents/${eventId}/${userName}`)
    .send({'eventId': eventId, 'userName': userName})
    console.log('api pass')
}
