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
    const { event_name, date, game } = eventObject
    return request
    .post(`${baseURL}/newEvent`)
    // .set(acceptJsonHeader)
    .type('form')
    // .type('application/json')
    .send({
        event_name,
        date,
        game
    })
    .then(response => {
        console.log(response)
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

export function checkIfInvited (eventId, userName) {
    return request
    .get(`${baseURL}/${eventId}/${userName}`)
}
