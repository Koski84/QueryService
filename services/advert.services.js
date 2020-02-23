const Advert = require('../models/advert.model')

exports.getAdverts = async function () {
  try {
    return await Advert.find()
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}

exports.getAdvertsWithImages = async function () {
  try {
    return await Advert.find().populate('images')
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts with images')
  }
}
