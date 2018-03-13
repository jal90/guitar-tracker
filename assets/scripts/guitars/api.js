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

const getGuitars = function () {
  return $.ajax({
    url: config.apiOrigin + '/guitars',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGuitar = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/guitars/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGuitar = function (id, data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/guitars/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteGuitar = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/guitars/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGuitar,
  getGuitars,
  showGuitar,
  updateGuitar,
  deleteGuitar
}
