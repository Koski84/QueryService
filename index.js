var express = require('express')
var advert = require('./advert.routes')

var app = express()
app.use('/advert', advert)

app.listen(9020, () => {
  console.debug('Listening port 9020')
})
