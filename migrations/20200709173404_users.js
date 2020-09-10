exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('userId').primary()
    table.string('name')
    table.string('password')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
