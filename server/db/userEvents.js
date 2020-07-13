const connection = require('./connection')

function getUserEvents (userId, db = connection) {
  return db('userEvents')
    .join('users', 'user_id', 'id')
    .where('user_id')
}

function getAttendees (eventId, db = connection) {
  return db('userEvents')
    .join('events', 'event_id', 'id')
}

module.exports = {
  getUserEvents,
  getAttendees
}
