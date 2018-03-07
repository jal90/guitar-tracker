const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignup = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  api.signup(data)
    .then(ui.signupSuccess)
    .catch(ui.signupFailure)
}

const onSignin = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signin(data)
    .then(ui.signinSuccess)
    .catch(ui.signinFailure)
}

const onSignout = (event) => {
  event.preventDefault()
  api.signout()
    .then(ui.signoutSuccess)
    .catch(ui.signoutFailure)
}

const onChangePw = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePw(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const addHandlers = () => {
  $('#signup').on('submit', onSignup)
  $('#signin').on('submit', onSignin)
  $('#signout').on('submit', onSignout)
  $('#changepw').on('submit', onChangePw)
}

module.exports = {
  addHandlers
}
