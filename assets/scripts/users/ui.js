const getUsersSuccess = function (data) {
  $('body').append('get Users was successful')
}

const getUsersFailure = function (data) {
  $('body').append('get Users failed')
}

module.exports = {
  getUsersSuccess,
  getUsersFailure
}
