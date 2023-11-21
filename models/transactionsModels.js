
const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

const Transaction = sequelize.define('transaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    promotion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount_type: {
      type: DataTypes.ENUM('credit', 'debit'),
      allowNull: false
    }
  });
  
  Promotion.hasMany(Transaction, {
    foreignKey: 'promotion_id'
  });
  Transaction.belongsTo(Promotion, {
    foreignKey: 'promotion_id'
  });
  
  sequelize.sync({ force: true }).then(() => {
    console.log('Tables created successfully!');
  })}