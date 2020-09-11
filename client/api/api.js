import request from 'superagent'

const baseURL = 'https://games-night-app.herokuapp.com/api/v1'

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
        // CONVERT DATE MONTH TO WORD
        response.body.map(event => {
            event.date = dateConvert(event.date)
        // GET THE GUEST COUNT FOR THE EVENT
            getAttendees(event.eventId)
            .then(guestCount => {
                event.guestCount = guestCount.length
            })
        })
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
        return response.body
    })
}

export function inviteUser (eventId, userName) {
    let userObject = {eventId, userName}
    request
    .post(`${baseURL}/userEvents/${eventId}/${userName}`)
    .end((err, res) => {
        return res
    })
}

export function getUsers() {
    return request
    .get(`${baseURL}/users`)
    .then(response => {
        return response.body
    })
}

export function getEvents() {
    return request
    .get(`${baseURL}/event`)
    .then(response => {
        return response.body
    })
}

export function getUserById(userId) {
    return request
    .get(`${baseURL}/users/${userId}`)
    .then(response => {
        return response.body
    })
}

export function addUser(newUser) {
    request
    .post(`${baseURL}/users/register`)
    .send(newUser)
    .end((err, res) => {
    })
}

function dateConvert (date) {
    const dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
    let dateSplit = date.split('-')
    let dateIndex = Number(dateSplit[1] - 1)
    let newDate = dates[dateIndex] + ' ' + dateSplit[2] 
    let timeSplit = newDate.split('T')
    newDate = timeSplit[0]
    return newDate
}



