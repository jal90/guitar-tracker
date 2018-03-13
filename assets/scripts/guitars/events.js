const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')

let dataId = 0

const onCreateGuitar = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  store.newUser = 'no'

  api.createGuitar(data)
    .then(ui.createGuitarSuccess)
    .then(() => api.getGuitars(event))
    .then(ui.getGuitarsSuccess)
    .catch(ui.createGuitarFailure)
}

const onGetGuitars = (event) => {
  event.preventDefault()

  api.getGuitars()
    .then(ui.getGuitarsSuccess)
}

const onShowGuitar = (event) => {
  event.preventDefault()

  dataId = $(event.target).attr('data-id')
  api.showGuitar(dataId)
    .then(ui.showGuitarSuccess)
}

const populateUpdateData = (event) => {
  event.preventDefault()

  const guitar = store.guitar
  $('#guitar-make').val(guitar.make)
  $('#guitar-model').val(guitar.model)
  $('#string-brand').val(guitar.string_brand)
  $('#string-guage').val(guitar.string_guage)
  $('#last-string-change').val(guitar.last_string_change)
  $('#last-setup').val(guitar.last_setup)
  $('#setup-notes').val(guitar.setup_notes)
}

const onUpdateGuitar = (event) => {
  event.preventDefault()

  dataId = store.guitar.id

  const updateData = getFormFields(event.target)

  api.updateGuitar(dataId, updateData)
    .then(ui.updateGuitarSuccess)
    .then(() => api.getGuitars(event))
    .then(ui.getGuitarsSuccess)
    .catch(ui.updateGuitarFailure)
}

const onDeleteGuitar = () => {
  dataId = store.guitar.id

  const deletedGuitar = $('[data-id=' + dataId + ']')

  api.deleteGuitar(dataId)
    .then($('#delete-modal').modal('toggle'))
    .then($(deletedGuitar).fadeOut(1000))
    .then(() => api.getGuitars(event))
    .then(ui.getGuitarsSuccess)
    .catch(ui.deleteGuitarFailure)
}

const addHandlers = () => {
  $('#createguitar').on('submit', onCreateGuitar)
  $('#guitarsindex').on('submit', onGetGuitars)
  $('#showguitar').on('submit', onShowGuitar)
  $('body').on('click', '.updateGuitarButton', populateUpdateData)
  $('#updateguitar').on('submit', onUpdateGuitar)
  $('body').on('click', '#delete', onDeleteGuitar)
  $('body').on('click', '.expandButton', onShowGuitar)
}

module.exports = {
  addHandlers,
  onGetGuitars
}
