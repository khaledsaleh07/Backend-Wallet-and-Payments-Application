import { Sequelize, DataTypes } from 'sequelize';
import User from './usersModels.js';
import Promotion from './promotionModels.js';
import db from '../config/dbconfig.js';


  const Transaction = db.define('transaction', {
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



export default Transaction;