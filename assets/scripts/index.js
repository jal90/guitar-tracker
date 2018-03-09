'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const authEvents = require('./auth/events.js')
const userEvents = require('./users/events.js')
const guitarEvents = require('./guitars/events.js')

$(() => {
  setAPIOrigin(location, config)
  $('#user-page').hide()
  authEvents.addHandlers()
  userEvents.addHandlers()
  guitarEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
