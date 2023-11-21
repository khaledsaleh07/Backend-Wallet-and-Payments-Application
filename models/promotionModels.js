const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {


const Promotion = sequelize.define('promotion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    promo_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  })}