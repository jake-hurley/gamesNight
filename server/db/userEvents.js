const connection = require('./connection')

function getUserEvents (userId, db = connection) {
  return db('userEvents')
    .join('users', 'user_id', 'userId')
    .join('events', 'event_id', 'EventId')
    .where('user_id', userId)
    .select('eventId', 'event_name', 'date', 'name')
}

function getAttendees (eventId, db = connection) {
  return db('userEvents')
    .join('events', 'event_id', 'EventId')
    .join('users', 'user_id', 'userId')
    .where('event_id', eventId)
    .select('id', 'event_id', 'name', 'user_id')
}

function inviteUser (eventId, userName, db = connnection) {
  return db('userEvents')
  .join('events', 'event_id', 'EventId')
  .join('users', 'user_id', 'userId')
  .insert({
    event_id: eventId,
    user_id: userId    
})

}

module.exports = {
  getUserEvents,
  getAttendees
}
