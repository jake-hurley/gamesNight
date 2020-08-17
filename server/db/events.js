const connection = require('./connection')

function getEvents (db = connection) {
  return db('events').select()
}

function getEventById (eventId, db = connection) {
  return db('events')
    .where('eventId', eventId).first()
}

function addEvent (eventObject, db = connection) {
  // eventObject = JSON.parse(eventObject)
  console.log(eventObject)
  return db('events')
  .insert({ 
      event_name: eventObject.event_name,
      date: eventObject.date,  
      game: eventObject.game
    })
  }

module.exports = {
  getEvents,
  getEventById,
  addEvent
}
