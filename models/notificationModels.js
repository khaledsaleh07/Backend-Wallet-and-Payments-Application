const { DataTypes } = require("sequelize");
const { sequelize } = require('sequelize'); // Adjust the path accordingly
const User = require("./usersModels"); // Import the User model from userModel.js
const Transaction = require("./transactionsModels"); // Import the User model from userModel.js
  



module.exports = (sequelize, DataTypes) => {


const Notification = sequelize.define('notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  received_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  transaction_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Transaction,
      key: 'id'
    }
  }
});

}