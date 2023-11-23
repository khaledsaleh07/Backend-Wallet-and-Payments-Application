const { DataTypes } = require('sequelize');
const { sequelize } = require('./index'); // Adjust the path accordingly
const User = require('./usersModels');
const Transaction = require('./transactionsModels');

// Make sure sequelize is properly initialized before defining models
if (!sequelize) {
  throw new Error('Sequelize instance is not defined. Make sure it is properly initialized.');
}

const Promotion = sequelize.define('Promotion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  promotion_description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  promotion_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  promo_code: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  }
});

Promotion.hasMany(Transaction, { foreignKey: 'promotion_id', as: 'Transactions' });

module.exports = Promotion;
