const Advert = require('../models/advert.model')

exports.getAdverts = async function () {
  try {
    return await Advert.find()
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}
