db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Name of the table in the database
db.products = require('./promotionModels.js')(sequelize, DataTypes);
db.reviews = require('./transactionsModels.js')(sequelize, DataTypes);
db.reviews = require('./usersModels.js')(sequelize, DataTypes);

// If this is true, you will lose all data in the database every time
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database schema synchronized successfully!');
    });

module.exports = db;
