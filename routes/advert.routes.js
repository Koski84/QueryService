const express = require('express')
const router = express.Router()
const advertController = require('../controllers/advert.controllers')

router.get('/', advertController.getAdverts)
router.get('/images', advertController.getAdvertsWithImages)

module.exports = router
