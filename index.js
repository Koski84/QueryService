const express = require('express')
const advert = require('./advert.routes')

const app = express()
app.use('/advert', advert)

app.listen(9020, () => {
  console.debug('Listening port 9020')
})
