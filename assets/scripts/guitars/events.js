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






const addHandlers = () => {
  $('#createguitar').on('submit', onCreateGuitar)
}

module.exports = {
  addHandlers
}
