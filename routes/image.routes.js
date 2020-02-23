const express = require('express')
const router = express.Router()
const imageController = require('../controllers/image.controllers')

router.get('/', imageController.getImages)

module.exports = router