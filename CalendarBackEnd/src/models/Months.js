module.exports = (sequelize, DataTypes) => {
  const Month = sequelize.define('Month', {
    month: DataTypes.STRING,
    days: DataTypes.INTEGER
  })
  return Month
}
