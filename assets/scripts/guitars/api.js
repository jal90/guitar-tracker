const config = require('../config')
const store = require('../store')

const createGuitar = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/guitars',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}














module.exports = {
  createGuitar
}
