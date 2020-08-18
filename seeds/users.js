exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { userId: 1, name: 'Jake', password: 'hurley' },
        { userId: 2, name: 'Pete', password: 'Mcnie' },
        { userId: 3, name: 'Johny', password:'jboy123' },
        { userId: 4, name: 'Ariana', password: 'mirus420' }
      ])
    })
}
