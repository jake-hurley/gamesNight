const connection = require('../connection')

function getUsers (db = connection) {
  return db('users').select()
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id)
}

module.exports = {
  getUsers,
  getUserById
}
