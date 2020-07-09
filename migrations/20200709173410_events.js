exports.up = function (knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('event_id').unique()
    table.integer('event_name')
    table.date('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
