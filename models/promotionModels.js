// promotionModels.js
import { DataTypes } from 'sequelize';
import db from '../config/dbconfig.js';
import User from "./usersModels.js"

const Promotion = db.define('promotion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  
  promotion_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  promotion_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  promo_code: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
});

export default Promotion;
