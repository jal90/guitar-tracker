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

  data.guitars.forEach(x => {
    $('body').append(Object.values(x) + '</br>')
  })
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
  updateGuitarSuccess,
  updateGuitarFailure,
  deleteGuitarSuccess,
  deleteGuitarFailure
}
