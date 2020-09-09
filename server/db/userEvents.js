const connection = require('./connection')
// const { first } = require('./connection')

function getUserEvents (userId, db = connection) {
  return db('userEvents')
    .join('users', 'user_id', 'userId')
    .join('events', 'event_id', 'eventId')
    .where('user_id', userId)
    .select('eventId', 'event_name', 'date', 'name', 'userId')
}

function getAttendees (eventId, db = connection) {
  return db('userEvents')
    .join('events', 'event_id', 'eventId')
    .join('users', 'user_id', 'userId')
    .where('event_id', eventId)
    .select('id', 'event_id', 'name', 'user_id')
}

function inviteUser (eventId, userId, db = connection) {
    return db('userEvents')
    .join('events', 'event_id', 'eventId')
    .join('users', 'user_id', 'userId')
    .insert({
      event_id: eventId,
      user_id: userId    
  })
}

function getUserByName (userName, db = connection) {
  return db('users')
  .where('name', userName).first()
}

module.exports = {
  getUserEvents,
  getAttendees,
  inviteUser,
  getUserByName
}
