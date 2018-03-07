const store = require('../store')

const signupSuccess = function () {
  $('body').append('Signed up successfully')
}

const signupFailure = function () {
  $('body').append('Sign up FAILED')
}

const signinSuccess = function (data) {
  $('body').append('Signed IN successfully')
  store.user = data.user
  console.log('store.user is', store.user)
}

const signinFailure = function () {
  $('body').append('Sign IN FAILED')
}

const signoutSuccess = function () {
  $('body').append('Signed OUT successfully')
}

const signoutFailure = function () {
  $('body').append('Sign OUT FAILED')
}

module.exports = {
  signupSuccess,
  signupFailure,
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure
}
