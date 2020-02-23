var express = require('express')
var advert = require('./advert.routes')

var app = express()
app.use('/advert', advert)

app.listen(9020, () => {
  console.debug('Listening port 9020')
})

// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/pt10', { useNewUrlParser: true, useUnifiedTopology: true })

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected to db!')

//   var advertSchema = new mongoose.Schema()
//   var advert = mongoose.model('advert', advertSchema)

//   advert.find((err, adverts) => {
//     if (err) return console.error(error)
//     console.log(adverts)
//   })

// })
