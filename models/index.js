const dbconfig = require('../config/dbconfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.db,
    dbconfig.user,
    dbconfig.password, {
        host: dbconfig.host,
        dialect: dbconfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbconfig.max,
            min: dbconfig.min,
            acquire: dbconfig.acquire,
            idle: dbconfig.pool.idle
        }
    }
);





sequelize.authenticate()
   .then(() => {
       console.log('Connected to database successfully!');
   })
   .catch(err => {
       console.error('Error connecting to database:', err);
   });

module.exports = sequelize;