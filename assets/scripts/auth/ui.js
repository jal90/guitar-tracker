const store = require('../store')

const signupSuccess = function () {
  $('body').append('Signed up successfully')
  document.getElementById('signup').reset()
}

const signupFailure = function () {
  $('body').append('Sign up FAILED')
  document.getElementById('signup').reset()
}

const signinSuccess = function (data) {
  $('body').append('Signed IN successfully')
  store.user = data.user
  document.getElementById('signin').reset()
}

const signinFailure = function () {
  $('body').append('Sign IN FAILED')
  document.getElementById('signin').reset()
}

const signoutSuccess = function () {
  $('body').append('Signed OUT successfully')
}

const signoutFailure = function () {
  $('body').append('Sign OUT FAILED')
}

const changePwSuccess = function () {
  $('body').append('changed password successfully')
  document.getElementById('changepw').reset()
}

const changePwFailure = function () {
  $('body').append('password change FAILED')
  document.getElementById('changepw').reset()
}

module.exports = {
  signupSuccess,
  signupFailure,
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  changePwSuccess,
  changePwFailure
}
