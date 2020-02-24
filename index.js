require('dotenv').config('.env')
const express = require('express')
const advert = require('./routes/advert.routes')

const app = express()
app.use('/adverts', advert)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
