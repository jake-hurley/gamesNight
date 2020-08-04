import request from 'superagent'

const baseURL = '/api/v1'

export function getAttendees (eventId) {
    console.log(baseURL + `/userEvents/attendees/${eventId}` )
    return request
    .get(baseURL + `/userEvents/attendees/${eventId}`)
    .then(response => {
        return response.body
    })
}