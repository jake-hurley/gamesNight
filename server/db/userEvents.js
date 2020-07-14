const connection = require('../connection')

function getAllUserEvents (db = connection) {
  return db('userEvents').select()
}

function getUserEvents (userId, db = connection) {
  return db('userEvents')
    .join('users', 'user_id', 'users.id')
    .join('events', 'event_id', 'events.id')
    .where('user_id', userId)
}

function getAttendees (eventId, db = connection) {
  return db('userEvents')
    .join('events', 'event_id', 'events.id')
    .join('users', 'user_id', 'users.id')
    .where('event_id', eventId)
    .select('name', 'user_id')
}

module.exports = {
  getUserEvents,
  getAttendees,
  getAllUserEvents
}
