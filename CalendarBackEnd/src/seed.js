const {sequelize} = require('./models')

const {Month} = require('./models')

const months = [
  {
    id: 1,
    month: 'January',
    days: 31
  },
  {
    id: 2,
    month: 'February',
    days: 28
  },
  {
    id: 3,
    month: 'March',
    days: 31
  },
  {
    id: 4,
    month: 'April',
    days: 30
  },
  {
    id: 5,
    month: 'May',
    days: 31
  },
  {
    id: 6,
    month: 'June',
    days: 30
  },
  {
    id: 7,
    month: 'July',
    days: 31
  },
  {
    id: 8,
    month: 'August',
    days: 31
  },
  {
    id: 9,
    month: 'September',
    days: 30
  },
  {
    id: 10,
    month: 'October',
    days: 31
  },
  {
    id: 11,
    month: 'November',
    days: 30
  },
  {
    id: 12,
    month: 'January',
    days: 31
  }
]

const seed = () =>
  Promise.all(months.map(month =>
    Month.create(month))
  )

module.exports = () => {
  console.log('Syncing db...')
  sequelize.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      sequelize.close()
      return null
    })
}
