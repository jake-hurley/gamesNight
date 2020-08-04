const connection = require('./connection')

function getUserEvents (userId, db = connection) {
  return db('userEvents')
    .join('users', 'user_id', 'userId')
    .where('user_id', userId)
}

function getAttendees (eventId, db = connection) {
  return db('userEvents')
    .join('events', 'event_id', 'EventId')
    .join('users', 'user_id', 'userId')
    .where('event_id', eventId)
    .select('id', 'event_id', 'name', 'user_id')
}

module.exports = {
  getUserEvents,
  getAttendees
}
