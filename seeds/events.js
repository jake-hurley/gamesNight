exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { eventId: 1, event_name: 'Mario Kart Monday', game: 'Mario Kart', date: '2021-01-05' },
        { eventId: 2, event_name: 'Catan Club', game: 'Catan', date: '2021-06-21' },
        { eventId: 3, event_name: 'Dnd n DnB', game: 'Dungeons and Dragons', date: '2020-12-16' }
      ])
    })
}
