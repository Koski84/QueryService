const Advert = require('../models/advert.model')

exports.getAdverts = async function (query) {
  try {
    var adverts = await Advert.find(query)
    return adverts
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}
