const express = require('express')
const router = express.Router()
const advertController = require('./advert.controllers')

router.get('/', advertController.getAdverts)

module.exports = router
