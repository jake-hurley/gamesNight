exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { userId: 1, name: 'Jake' },
        { userId: 2, name: 'Pete' },
        { userId: 3, name: 'Johny' }
      ])
    })
}
