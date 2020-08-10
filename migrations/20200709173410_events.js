exports.up = function (knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('eventId').unique()
    table.integer('event_name')
    table.string('game')
    table.date('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
