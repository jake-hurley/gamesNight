const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
}

function getUserById (id, db = connection) {
  return db('users')
    .where('userId', id).first()
}

function addUser (newUser, db = connection) {
  console.log(newUser)
  const { userName, password } = newUser
  return db('users')
  .insert({
    name: userName,
    password: password
  })
}

module.exports = {
  getUsers,
  getUserById,
  addUser
}
