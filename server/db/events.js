const connection = require('./connection')

function getEvents (db = connection) {
  return db('events').select()
}

function getEventById (eventId, db = connection) {
  return db('events')
    .where('id', eventId).select()
}

module.exports = {
  getEvents,
  getEventById
}
