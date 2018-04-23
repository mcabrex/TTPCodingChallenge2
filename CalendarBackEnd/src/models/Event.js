module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    startTime: DataTypes.INTEGER,
    endTime: DataTypes.INTEGER,
    day: DataTypes.INTEGER
  })
  return Event
}
