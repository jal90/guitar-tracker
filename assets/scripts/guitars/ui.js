const showGuitarsTemplate = require('../templates/guitar-listing.handlebars')
const getGuitarTemplate = require('../templates/guitar-show.handlebars')
const store = require('../store')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')

const createGuitarSuccess = function () {
  $('#create-modal').modal('hide')

  $.toast({
    // text: '',
    heading: 'Successfully created new guitar',
    icon: 'success',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
  document.getElementById('createguitar').reset()
}

const createGuitarFailure = function () {
  $('#createguitar').append('Create guitar FAILED SOMEHOW???')
  document.getElementById('createguitar').reset()
}

const getGuitarsSuccess = function (data) {
  const showGuitarsHTML = showGuitarsTemplate({ guitars: data.guitars })

  if (data.guitars.length === 0) {
    $('#guitar-display').html('Your catalog is empty. When you\'ve made guitars they\'ll show up here. Click \'Create Guitar\' to get started')
  } else {
    $('#guitar-display').hide().html(showGuitarsHTML).fadeIn('slow')
    $('#display-message').html('')
    for (let i = 0; i < data.guitars.length; i++) {
      if (data.guitars[i].make === 'Fender') {
        // $(event.target).child('.icon').html('testing')
        console.log(event.target)
      }
    }
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

  $.toast({
    // text: '',
    heading: 'Successfully updated guitar',
    icon: 'success',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
  document.getElementById('updateguitar').reset()
}

const updateGuitarFailure = function () {
  $('body').append('Updated guitar FAILED Somehow???')
  document.getElementById('updateguitar').reset()
}

const deleteGuitarSuccess = function () {
  $.toast({
    // text: '',
    heading: 'Deleted guitar',
    icon: 'error',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
}

module.exports = {
  createGuitarSuccess,
  createGuitarFailure,
  getGuitarsSuccess,
  showGuitarSuccess,
  updateGuitarSuccess,
  updateGuitarFailure,
  deleteGuitarSuccess
}
