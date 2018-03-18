const store = require('../store')

const signupSuccess = function (data) {
  $('#signup-modal').modal('toggle')
  $('#signup-signin').html('Signed up successfully - now please sign in')
  $('#login-modal').modal('toggle')
  document.getElementById('signup').reset()
  document.getElementById('signin').reset()
}

const signupFailure = function () {
  $('.signup-feedback').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  document.getElementById('signup').reset()
  document.getElementById('signin').reset()
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
  document.getElementById('signin').reset()
  document.getElementById('signup').reset()
}

const signinFailure = function () {
  $('.login-feedback').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  $('#signup-signin').html('')
  document.getElementById('signin').reset()
  document.getElementById('signup').reset()
}

const signoutSuccess = function () {
  $('.user-page').hide()
  $('#home-page').show()
  $('#guitar-display').html('')
  $('#feedback').html('')
  document.getElementById('updateguitar').reset()
  document.getElementById('createguitar').reset()
  document.getElementById('changepw').reset()
}

const changePwSuccess = function () {
  $('#feedback').html('Changed password successfully').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  document.getElementById('changepw').reset()
}

const changePwFailure = function () {
  $('#feedback').html('Incorrect password, try again').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(1700)
  document.getElementById('changepw').reset()
}

module.exports = {
  signupSuccess,
  signupFailure,
  signinSuccess,
  signinFailure,
  signoutSuccess,
  changePwSuccess,
  changePwFailure
}
