const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('habiteo', 'root', 'ch3ckPa$$word', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: 0,
  timezone: '+08:00',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

try {
  sequelize.authenticate();
} catch (error) {
  console.log('Unable to connect');
  console.error(error);
}

exports.sequelize = sequelize;
