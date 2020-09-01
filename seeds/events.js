exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { eventId: 1, event_name: 'Mario Kart Monday', game: 'Mario Kart', date: '2021-01-05', 
        description: 'We are starting a weekly Mario Kart Tournament. Hosted online and results posted to the Discord after each round. The plan is to have this go for 5 weeks if numbers are consistent and will look at more events happening once we see how this goes. Inviting others is welcome but please inform one of the organizers' },
        { eventId: 2, event_name: 'Catan Club', game: 'Catan', date: '2021-06-21', 
        description: 'Grabbing a few cases and playing Catan. Dont need to bring anything outside of any food you want. Playlist is in the groupchat so just add songs you want and we will have ourselves a drunken Catan sesh.' },
        { eventId: 3, event_name: 'Dnd n DnB', game: 'Dungeons and Dragons', date: '2020-12-16', 
        description: 'The name should say it all. We are continuing the Campaign we started 2 weeks ago, I hope you all remembered what happened' }
      ])
    })
}
