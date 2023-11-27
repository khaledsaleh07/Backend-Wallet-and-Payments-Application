// notificationModels.js
import Sequelize, { DataTypes } from 'sequelize';
import db from '../config/dbconfig.js';
import Transaction from './transactionsModels.js';

const Notification = db.define('notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  transaction_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  
  },
  receiver_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }


});


export default Notification;
