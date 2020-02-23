const imageService = require('../services/image.services')

exports.getImages = async function (req, res) {
  try {
    const images = await imageService.getImages()
    return res.status(200).json({ status: 200, data: images, message: 'Succesfully images retrieved' })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}
