const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pt10', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected to db!')
})

const advertSchema = new mongoose.Schema()
const advert = mongoose.model('advert', advertSchema)

module.exports = advert
