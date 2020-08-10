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
    console.log(eventObject)
    return request
    .post(`${baseURL}/newEvent`)
    // .set(acceptJsonHeader)
    .type('application/json')
    .send(eventObject)
    .then(response => {
      return response
    //   console.log('pass')
    })
    .catch(err => console.log('Error logging ', err))
}

export function getEventById (eventId) {
    return request
    .get(`${baseURL}/event/${eventId}`)
    .then(response => {
        console.log(response)
        return response.body
    })
}

