const createGuitarSuccess = function () {
  $('body').append('Created guitar successfully')
  document.getElementById('createguitar').reset()
}

const createGuitarFailure = function () {
  $('body').append('Create guitar FAILED')
  document.getElementById('createguitar').reset()
}

module.exports = {
  createGuitarSuccess,
  createGuitarFailure
}
