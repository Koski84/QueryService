const Image = require('../models/image.model')

exports.getImages = async function () {
  try {
    const images = await Image.find()
    return images
  } catch (e) {
    console.error(e)
    throw Error('Error while loading images')
  }
}
