const EventsController = require('./controllers/EventsController')
const MonthsController = require('./controllers/MonthsController')

module.exports = (app) => {
  app.get('/months', MonthsController.index)
  app.get('/events', EventsController.index)
  app.post('/events', EventsController.post)
}
