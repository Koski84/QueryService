var express = require('express')
var router = express.Router()

var advertController = require('./advert.controllers')

router.get('/', advertController.getAdverts)

module.exports = router
