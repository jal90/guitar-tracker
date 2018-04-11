'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const authEvents = require('./auth/events.js')
const userEvents = require('./users/events.js')
const guitarEvents = require('./guitars/events.js')
const api = require('./auth/api.js')

$(() => {
  // console.log('api is ', api)
  api.signup()
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  userEvents.addHandlers()
  guitarEvents.addHandlers()
  $(document).ajaxStart(function () {
    $('.loading').show()
  })
  $(document).ajaxComplete(function () {
    $('.loading').hide()
  })
  $(document).ajaxError(function () {
    $('.loading').hide()
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
