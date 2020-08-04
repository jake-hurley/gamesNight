const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
}

function getUserById (id, db = connection) {
  return db('users')
    .where('id', id).first()
}

module.exports = {
  getUsers,
  getUserById
}
