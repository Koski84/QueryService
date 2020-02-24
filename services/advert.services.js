const Advert = require('../models/advert.model')

exports.getAdverts = async function ({ minScore, maxScore, page, limit, sortBy }) {
  try {
    const adverts = Advert.find()
      .where('score').gte(minScore).lte(maxScore)
      .skip(page * limit)
      .limit(limit)
      .sort(sortBy)

    return adverts
  } catch (e) {
    console.error(e)
    throw Error('Error while loading adverts')
  }
}
