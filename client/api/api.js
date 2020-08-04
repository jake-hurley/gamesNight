import request from 'superagent'

const baseURL = '/api/v1'

export function getAttendees (eventId) {
    return request
    .get(baseURL + `/userEvents/attendees/${eventId}`)
    .then(response => {
        return response.body
    })
}

export function getUserEvents(userId) {
    return request
    .get(baseURL + `/userEvents/${userId}`)
    .then(response => {
        return response.body
    })
}