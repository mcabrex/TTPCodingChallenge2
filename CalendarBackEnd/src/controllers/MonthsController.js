const {Month} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const event = await Month.findAll()
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the months'
      })
    }
  },
  async post (req, res) {
    try {
      const event = await Month.create(req.body)
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the month'
      })
    }
  }
}
