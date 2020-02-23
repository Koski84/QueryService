const advert = require('./advert.model')

exports.getAdverts = async function (query) {
  try {
    var adverts = await advert.find(query)
    return adverts
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}
