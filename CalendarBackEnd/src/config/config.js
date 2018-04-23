module.exports = {
  port: process.env.PORT || 8081,
  // exporting this port to be required in the app.js file to get the app started
  db: {
    database: process.env.DB_NAME || 'mycalendar',
    user: process.env.DB_USER || 'mycalendar',
    password: process.env.DB_PASS || 'mycalendar',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      // what kind of db we're going to be connecting to
      host: process.env.HOST || 'localhost',
      // telling sequelize the location of the db we want to connect to
      storage: './mycalendar.sqlite'
      // where to store the sqlite files
    }
  }
}
