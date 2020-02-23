var advert = require('./advert.model')

exports.getAdverts = async function (query) {
  try {
    console.log(advert)
    var adverts = await advert.find(query)
    return adverts
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}
