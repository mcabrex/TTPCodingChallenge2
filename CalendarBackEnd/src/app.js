const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()
// this is gonna build our express server
app.use(morgan('combined'))
// use morgan and pass it 'combined' to print the logs in a certain way
app.use(bodyParser.json())
// allow our express app to easily parse any json request
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false})
// this will connect sequelize to whatever database you have configured and create the tables if they don't exist, if you pass force: true into this sync it will drop the tables DANGEROUS IN PRODUCTION fine locally i guess
  .then(() => {
  // once you're done syncing just start the server
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

// require('./seed')()
