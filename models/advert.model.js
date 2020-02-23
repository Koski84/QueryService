require('dotenv').config('.env')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

const AdvertSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  type: { type: String, required: true },
  description: { type: String },
  height: { type: String },
  size: { type: Number },
  km: { type: String },
  color: { type: String },
  fabricant: { type: String },
  imageIds: [{ type: Number }]
}, { toJSON: { virtuals: true } })

AdvertSchema.virtual('images', {
  ref: 'Image',
  localField: 'imageIds',
  foreignField: 'id'
})

const Advert = mongoose.model('Advert', AdvertSchema)

module.exports = Advert
