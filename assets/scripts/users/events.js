const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetUsers = function (event) {
  event.preventDefault()

  api.getUsers()
    .then(ui.getUsersSuccess)
    .catch(ui.getUsersFailure)
}

const addHandlers = () => {
  $('#users').on('submit', onGetUsers)
}

module.exports = {
  addHandlers
}
