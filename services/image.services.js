const Image = require('../models/image.model')

exports.getImages = async function () {
  try {
    return await Image.find()
  } catch (e) {
    console.error(e)
    throw Error('Error while loading images')
  }
}
