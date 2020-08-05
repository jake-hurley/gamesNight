const connection = require('./connection')

function getEvents (db = connection) {
  return db('events').select()
}

function getEventById (eventId, db = connection) {
  return db('events')
    .where('id', eventId).select()
}

function addEvent (eventObject, db = connection) {
  // return db('events')
  // .insert({ 
  //     event_name: eventObject.event_name,
  //     date: eventObject.date,  
  //   })
  console.log('pass')
  }

module.exports = {
  getEvents,
  getEventById,
  addEvent
}
