const showGuitarsTemplate = require('../templates/guitar-listing.handlebars')

const createGuitarSuccess = function () {
  $('body').append('Created guitar successfully')
  document.getElementById('createguitar').reset()
}

// createGuitarFailure unecessary since I'm catching errors on the front end
// const createGuitarFailure = function () {
//   $('body').append('Create guitar FAILED')
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
  for (const key in data.guitar) {
    $('body').append(key + ': ' + data.guitar[key] + '</br>')
  }
  document.getElementById('showguitar').reset()
}

const updateGuitarSuccess = function () {
  $('body').append('Updated guitar successfully')
  document.getElementById('updateguitar').reset()
}

const updateGuitarFailure = function () {
  $('body').append('Updated guitar FAILED')
  document.getElementById('updateguitar').reset()
}

const deleteGuitarSuccess = function () {
  $('body').append('Deleted guitar successfully')
  document.getElementById('deleteguitar').reset()
}

const deleteGuitarFailure = function () {
  $('body').append('Delete guitar FAILED')
  document.getElementById('deleteguitar').reset()
}

module.exports = {
  createGuitarSuccess,
  // createGuitarFailure,
  getGuitarsSuccess,
  showGuitarSuccess,
  updateGuitarSuccess,
  updateGuitarFailure,
  deleteGuitarSuccess,
  deleteGuitarFailure
}
