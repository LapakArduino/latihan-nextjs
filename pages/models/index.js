const Sequelize = require('sequelize')

const sequelize = new Sequelize('next', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
