const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateGuitar = (event) => {
  event.preventDefault()

  let emptyFieldCount = 0
  const data = getFormFields(event.target)
  const guitar = data.guitar
  for (const key in guitar) {
    console.log('current value is ', guitar[key])

    // TODO make a switch statement so errors can pertain to specific empty fields by name
    if (guitar[key] === '') {
      $('body').append(`cannot leave ${key} blank` + '<br/>')
      emptyFieldCount += 1
    }
  }
  if (emptyFieldCount === 0) {
    api.createGuitar(data)
      .then(ui.createGuitarSuccess)
  }
}

const onGetGuitars = (event) => {
  event.preventDefault()

  api.getGuitars()
    .then(ui.getGuitarsSuccess)
}

const onShowGuitar = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.showGuitar(data)
    .then(ui.showGuitarSuccess)
}

const onUpdateGuitar = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.updateGuitar(data) // (data)
    .then(ui.updateGuitarSuccess)
    .catch(ui.updateGuitarFailure)
}

const onDeleteGuitar = (event) => {
  event.preventDefault()

  // const button = document.getElementById('deleteGuitarButton')
  const dataId = $(event.target).attr('data-id')
  // const id = button.getAttribute('data-id')
  // console.log('id is ', id)

  api.deleteGuitar(dataId)
    .then($(event.target).parent().fadeOut(1000))
    // .then(ui.deleteGuitarSuccess)
  //   .catch(ui.deleteGuitarFailure)
}

const addHandlers = () => {
  $('#createguitar').on('submit', onCreateGuitar)
  $('#guitarsindex').on('submit', onGetGuitars)
  $('#updateguitar').on('submit', onUpdateGuitar)
  $('#deleteguitar').on('submit', onDeleteGuitar)
  $('body').on('click', '.deleteGuitarButton', onDeleteGuitar)
  $('#showguitar').on('submit', onShowGuitar)
}

module.exports = {
  addHandlers
}
