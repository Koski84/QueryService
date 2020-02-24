const advertService = require('../services/advert.services')

exports.getAdverts = async function (req, res) {
  try {
    const { minScore = -999, maxScore = 999, page = 0, limit = 10, sortBy = '' } = req.query
    const options = {
      minScore: parseInt(minScore),
      maxScore: parseInt(maxScore),
      page: parseInt(page),
      limit: parseInt(limit),
      sortBy
    }
    const adverts = await advertService.getAdverts(options)

    return res.status(200).json({ status: 200, data: adverts, message: 'Succesfully adverts retrieved' })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message })
  }
}
