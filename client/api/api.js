import request from 'superagent'


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
   return request
  .post(`${baseURL}/events/newEvent`)
  .send(eventObject)
  .then(res => {
    //RETURNS EVENT ID SO THAT CREATOR CAN BE ADDED AS ATTENDEE
    return res.body[0]
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
    let userObject = {eventId, userName}
    console.log(`${baseURL}/userEvents/${eventId}/${userName}`)
    request
    .post(`${baseURL}/userEvents/${eventId}/${userName}`)
    .end((err, res) => {
        console.log(res)
    })
}
