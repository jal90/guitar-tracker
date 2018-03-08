const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateGuitar = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log('data is', data)
  api.createGuitar(data)
    // .then(ui.signupSuccess)
    // .catch(ui.signupFailure)
}










const addHandlers = () => {
  $('#createguitar').on('submit', onCreateGuitar)
}

module.exports = {
  addHandlers
}
