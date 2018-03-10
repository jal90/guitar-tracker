const store = require('../store')

const signupSuccess = function () {
  $('#signup-modal').modal('toggle')
  $('#feedback').html('Signed up successfully - now please sign in')
  document.getElementById('signup').reset()
}

const signupFailure = function () {
  $('.signup-feedback').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  // $('body').append('Sign up FAILED')
  document.getElementById('signup').reset()
}

const signinSuccess = function (data) {
  $('.user-page').show()
  $('#home-page').hide()
  $('#login-modal').modal('toggle')
  $('#welcome').html(data.user.email.charAt(0).toUpperCase() + data.user.email.slice(1) + '!')
  store.user = data.user
  document.getElementById('signin').reset()
}

const signinFailure = function () {
  $('.login-feedback').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  // $('body').append('Sign IN FAILED')
  document.getElementById('signin').reset()
}

const signoutSuccess = function () {
  $('#feedback').html('Signed OUT successfully')
  $('.user-page').hide()
  $('#home-page').show()
  $('#display-message').html('')
  $('#guitar-display').html('')
}

// const signoutFailure = function () {
//   $('body').append('Sign OUT FAILED')
// }

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
  // signoutFailure,
  changePwSuccess,
  changePwFailure
}
