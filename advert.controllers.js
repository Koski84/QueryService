var advertService = require('./advert.services')

exports.getAdverts = async function (req, res) {
  try {
    const adverts = await advertService.getAdverts({})
    return res.status(200).json({ status: 200, data: adverts, message: 'Succesfully adverts retrieved' })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}
