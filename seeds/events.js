exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { id: 1, event_name: 'Mario Kart Monday', date: '05/01/2021' },
        { id: 2, event_name: 'Catan Club', date: '21/06/2021' },
        { id: 3, event_name: 'Dnd n DnB', date: '16/12/2020' }
      ])
    })
}
