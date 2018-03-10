const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

let dataId = 0

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

const onDeleteCheck = (event) => {
  event.preventDefault()

  dataId = $(event.target).attr('data-id')
  $('#delete-modal').modal('show')
  console.log('dataId is ', dataId)
}

// TODO get modal to come back a second time after deleting guitar
const onDeleteGuitar = () => {
  // event.preventDefault()

  const thiss = $('[data-id=' + dataId + ']')
  $(thiss).fadeOut(1000)

  api.deleteGuitar(dataId)
    .then($('#delete-modal').modal('toggle'))
    // .then($(event.target).parent().fadeOut(1000))
    // .catch(ui.deleteGuitarFailure)
}

const addHandlers = () => {
  $('#createguitar').on('submit', onCreateGuitar)
  $('#guitarsindex').on('submit', onGetGuitars)
  $('#updateguitar').on('submit', onUpdateGuitar)
  $('body').on('click', '.deleteGuitarButton', onDeleteCheck)
  $('body').on('click', '#delete', onDeleteGuitar)
  $('#showguitar').on('submit', onShowGuitar)
}

module.exports = {
  addHandlers
}
