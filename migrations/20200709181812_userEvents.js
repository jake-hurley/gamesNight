// runs with knex migrate:latest
exports.up = function (knex) {
  return knex.schema.createTable('userEvents', table => {
    table.increments('id').Primary()
    table.integer('user_id')
    table.integer('event_id')
  })
}

// runs with knex migrate:rollback
exports.down = function (knex) {
  return knex.schema.dropTable('userEvents')
}
