require('dotenv').config('.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

const ImageSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  url: { type: String, required: true },
  quality: { type: String, required: true }
})

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image
