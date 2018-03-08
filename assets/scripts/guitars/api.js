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

// TODO look up specific guitar(s) by id, or more user-friendly, by make or model (which may show multiple guitars by the same brand, for instance)

const updateGuitar = function (data) {
  console.log('data.guitar.id is', data.guitar.id)
  return $.ajax({
    url: config.apiOrigin + '/guitars/' + data.guitar.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteGuitar = function (data) {
  // console.log('data.guitar.id is ', data.guitar.id)
  return $.ajax({
    url: config.apiOrigin + '/guitars/' + data.guitar.id,
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
  updateGuitar,
  deleteGuitar
}
