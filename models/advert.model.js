require('dotenv').config('.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected to db!')
})

const AdvertSchema = new mongoose.Schema()
const Advert = mongoose.model('advert', AdvertSchema)

module.exports = Advert
