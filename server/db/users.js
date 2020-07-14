const connection = require('../connection')

function getUsers (db = connection) {
  return db('users').select()
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
}

// INCOMPLETE!!
function addUser (userObject, db = connection) {
  return db('users')
    .insert({ name: userObject.name })
    .then(response => {
      return response
    })
}

module.exports = {
  getUsers,
  getUserById,
  addUser
}
