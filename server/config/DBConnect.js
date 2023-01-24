const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  host: './config/database.sqlite'
});

module.exports = sequelize;