const showGuitarsTemplate = require('../templates/guitar-listing.handlebars')
const getGuitarTemplate = require('../templates/guitar-show.handlebars')
const store = require('../store')

const createGuitarSuccess = function () {
  // $('body').append('Created guitar successfully')
  document.getElementById('createguitar').reset()
}

// this functionality is currently being handled in events.js
// const createGuitarFailure = function () {
//   $('#createguitar').append('Create guitar FAILED')
//   document.getElementById('createguitar').reset()
// }

const getGuitarsSuccess = function (data) {
  console.log('datais', data)
  const showGuitarsHTML = showGuitarsTemplate({ guitars: data.guitars })

  if (data.guitars.length === 0) {
    $('#display-message').html('Create some guitars first!')
  } else {
    $('#display-message').html('Click on a guitar to see expanded view')
    $('#guitar-display').html(showGuitarsHTML)
    // data.guitars.forEach(x => {
    //   $('#guitar-display').html(Object.values(x) + '</br>')
    // })
  }
}

const showGuitarSuccess = function (data) {
  console.log('data.guitar is ', data.guitar)
  const getGuitarHTML = getGuitarTemplate({ guitar: data.guitar })
  $('#guitar-details').html(getGuitarHTML)



  // for (const key in data.guitar) {
  //   $('#guitar-details').html(key + ': ' + data.guitar[key] + '</br>')
  // }
  store.guitar = data.guitar

  document.getElementById('showguitar').reset()
}

const updateGuitarSuccess = function () {
  $('#update-modal').modal('hide')
  $('#update-success').modal('show')
  document.getElementById('updateguitar').reset()
}

const updateGuitarFailure = function () {
  $('body').append('Updated guitar FAILED')
  document.getElementById('updateguitar').reset()
}

// function unnecessary because deleting will never fail (option only shows up on existing guitars)
const deleteGuitarFailure = function () {
  $('body').append('You somehow managed to break the site. Contgratulations. Delete guitar FAILED')
}

module.exports = {
  createGuitarSuccess,
  // createGuitarFailure,
  getGuitarsSuccess,
  showGuitarSuccess,
  updateGuitarSuccess,
  updateGuitarFailure,
  deleteGuitarFailure
}
