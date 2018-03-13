const store = require('../store')

const signupSuccess = function (data) {
  $('#signup-modal').modal('toggle')
  $('#signup-signin').html('Signed up successfully - now please sign in')
  $('#login-modal').modal('toggle')
  document.getElementById('signup').reset()
  console.log('inside signupSuccess, data.user is', data.user)
}

const signupFailure = function () {
  $('.signup-feedback').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  document.getElementById('signup').reset()
}

const signinSuccess = function (data) {
  $('.user-page').show()
  $('#home-page').hide()
  $('#login-modal').modal('toggle')
  $('#signup-feedback').html('')
  $('#signup-signin').html('')
  const displayName = data.user.email.slice(1).split('@')[0]
  $('#welcome').html(data.user.email.charAt(0).toUpperCase() + displayName + '!')
  store.user = data.user
  console.log('inside signinSuccess, data.user is', data.user)
  console.log('inside signinSuccess, store.user is', store.user)
  document.getElementById('signin').reset()
}

const signinFailure = function () {
  $('.login-feedback').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  $('#signup-signin').html('')
  document.getElementById('signin').reset()
}

const signoutSuccess = function () {
  $('.user-page').hide()
  $('#home-page').show()
  $('#display-message').html('')
  $('#guitar-display').html('')
  $('#feedback').html('')
}

// const signoutFailure = function () {
//   $('body').append('Sign OUT FAILED')
// }

const newUserSuccess = function (data) {
  console.log('inside newUserSuccess, data is ', data)
}

const newUserFailure = function (data) {
  console.log('inside newUserFailure, data is ', data)
}

const changePwSuccess = function () {
  $('#feedback').html('changed password successfully')
  document.getElementById('changepw').reset()
}

const changePwFailure = function () {
  $('#feedback').html('password change FAILED')
  document.getElementById('changepw').reset()
}

module.exports = {
  signupSuccess,
  signupFailure,
  signinSuccess,
  signinFailure,
  signoutSuccess,
  // signoutFailure,
  changePwSuccess,
  changePwFailure,
  newUserSuccess,
  newUserFailure
}
