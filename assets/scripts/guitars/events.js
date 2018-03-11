const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../store')

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

  dataId = $(event.target).attr('data-id')
  api.showGuitar(dataId)
    .then(ui.showGuitarSuccess)
}

const onUpdateCheck = (event) => {
  event.preventDefault()

  dataId = $(event.target).attr('data-id')

  // TODO right now this works only after a GET show request (which stores that guitar's data in the store)
  // idea 1: fix it so that the show request happens when you click on "update guitar"
  // idea 2: build the 'expanded view' where the buttons are located, and that'll do the get request
  console.log('store.guitar is ', store.guitar)
  console.log('dataId is ', dataId)
}

const onUpdateGuitar = (event) => {
  event.preventDefault()


  const updateData = getFormFields(event.target)
  console.log(updateData.guitar)

  // console.log(data)
  // for (const key in updateData) {
  //   if (updateData[key] !== '') {
  //
  //   }
  // }

  // const guitData = {}

  // const data = getFormFields(event.target)
  // console.log('data is ', data)
  // api.updateGuitar(data, dataId)
  //   .then(ui.updateGuitarSuccess)


  //   .catch(ui.updateGuitarFailure)
}

const onDeleteCheck = (event) => {
  event.preventDefault()

  dataId = $(event.target).attr('data-id')
}

const onDeleteGuitar = () => {
  const deletedGuitar = $('[data-id=' + dataId + ']')

  api.deleteGuitar(dataId)
    .then($('#delete-modal').modal('toggle'))
    .then($(deletedGuitar).fadeOut(1000))
    .catch(ui.deleteGuitarFailure)
}

const addHandlers = () => {
  $('#createguitar').on('submit', onCreateGuitar)
  $('#guitarsindex').on('submit', onGetGuitars)
  $('#updateguitar').on('submit', onUpdateGuitar)
  $('body').on('click', '.deleteGuitarButton', onDeleteCheck)
  $('body').on('click', '.updateGuitarButton', onUpdateCheck)
  $('body').on('click', '#delete', onDeleteGuitar)
  $('body').on('click', '.expandButton', onShowGuitar)
}

module.exports = {
  addHandlers,
  dataId
}
