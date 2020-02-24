const express = require('express')
const router = express.Router()
const advertController = require('../controllers/advert.controllers')

router.get('/', advertController.getAdverts)

module.exports = router
