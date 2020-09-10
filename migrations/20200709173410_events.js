exports.up = function (knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('eventId').Primary()
    table.string('event_name')
    table.string('game')
    table.date('date')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
