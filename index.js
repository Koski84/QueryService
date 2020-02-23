require('dotenv').config('.env')
const express = require('express')
const advert = require('./routes/advert.routes')
const image = require('./routes/image.routes')

const app = express()
app.use('/adverts', advert)
app.use('/images', image)

app.listen(process.env.PORT, () => {
  console.log(`Listening port ${process.env.PORT}`)
})
