const config = require('../config')
const store = require('../store')

const getUsers = function () {
  return $.ajax({
    url: config.apiOrigin + '/users/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// const updateUser = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/users/',
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getUsers
  // updateUser
}
