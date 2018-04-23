const {Event} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const event = await Event.findAll()
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the events'
      })
    }
  },
  async post (req, res) {
    try {
      const event = await Event.create(req.body)
      res.send(event)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the event'
      })
    }
  }
}
