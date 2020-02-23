const Advert = require('../models/advert.model')

exports.getAdverts = async function () {
  try {
    const adverts = await Advert.find()
    return adverts
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}

exports.getAdvertsWithImages = async function () {
  try {
    const adverts = await Advert.find().populate('images')
    return adverts
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts with images')
  }
}
