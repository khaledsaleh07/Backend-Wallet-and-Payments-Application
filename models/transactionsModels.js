const { DataTypes } = require("sequelize");
const User = require("./usersModels");
const Promotion = require("./promotionModels");
const { sequelize } = require('sequelize'); // Adjust the path accordingly


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
      allowNull: true,
      references: {
        model: Promotion,
        key: 'id'
      }
    },
    amount_type: {
      type: DataTypes.ENUM('credit', 'debit'),
      allowNull: false
    }
  });

  Promotion.hasMany(Transaction, {
    foreignKey: 'promotion_id'
  });

  Transaction.belongsTo(User, {
    foreignKey: 'sender_id',
    as: 'Sender'
  });

  Transaction.belongsTo(User, {
    foreignKey: 'recipient_id',
    as: 'Recipient'
  });

  Transaction.belongsTo(Promotion, {
    foreignKey: 'promotion_id'
  });

  return Transaction;  // Ensure that you return the model

}