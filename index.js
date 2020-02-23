require('dotenv').config('.env')
const express = require('express')
const advert = require('./routes/advert.routes')

const app = express()
app.use('/advert', advert)

app.listen(process.env.PORT, () => {
  console.debug(`Listening port ${process.env.PORT}`)
})
