const showGuitarsTemplate = require('../templates/guitar-listing.handlebars')
const getGuitarTemplate = require('../templates/guitar-show.handlebars')
const store = require('../store')

const createGuitarSuccess = function () {
  $('#create-modal').modal('hide')
  $('#update-success').modal('show')
  document.getElementById('createguitar').reset()
}

const createGuitarFailure = function () {
  $('#createguitar').append('Create guitar FAILED SOMEHOW???')
  document.getElementById('createguitar').reset()
}

const getGuitarsSuccess = function (data) {
  const showGuitarsHTML = showGuitarsTemplate({ guitars: data.guitars })

  if (data.guitars.length === 0) {
    $('#display-message').html('Create some guitars first!')
  } else {
    $('#guitar-display').hide().html(showGuitarsHTML).fadeIn('slow')
    $('#display-message').html('')
  }
}

const showGuitarSuccess = function (data) {
  const getGuitarHTML = getGuitarTemplate({ guitar: data.guitar })
  $('#guitar-details').html(getGuitarHTML)

  store.guitar = data.guitar
}

const updateGuitarSuccess = function () {
  $('#update-modal').modal('hide')
  $('#expand-modal').modal('hide')
  $('#update-success').modal('show')
  document.getElementById('updateguitar').reset()
}

const updateGuitarFailure = function () {
  $('body').append('Updated guitar FAILED Somehow???')
  document.getElementById('updateguitar').reset()
}

// function unnecessary because deleting will never fail (option only shows up on existing guitars)
const deleteGuitarFailure = function () {
  $('body').append('You somehow managed to break the site. Contgratulations. Delete guitar FAILED')
}

module.exports = {
  createGuitarSuccess,
  createGuitarFailure,
  getGuitarsSuccess,
  showGuitarSuccess,
  updateGuitarSuccess,
  updateGuitarFailure,
  deleteGuitarFailure
}
