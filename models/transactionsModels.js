// transactionsModels.js
import { DataTypes } from 'sequelize';
import db from '../config/dbconfig.js';
import User from './usersModels.js';
import Promotion from './promotionModels.js';

const Transaction = db.define('transaction', {
 id: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
   allowNull: false,
 },
 sender_id: {
   type: DataTypes.INTEGER,
   allowNull: false,

 },
 receiver_id: {
   type: DataTypes.INTEGER,
   allowNull: false,
 },
 date: {
   type: DataTypes.DATE,
   allowNull: false,
 },
 amountType: {
   type: DataTypes.ENUM("usd", "usdt"),
   allowNull: false,
 },
 amount: {
   type: DataTypes.FLOAT,
   allowNull: false,
 },
 promotion_id: {
   type: DataTypes.INTEGER,
   allowNull: false,
   onDelete: 'CASCADE',
   onUpdate: 'CASCADE',
 },
});




export default Transaction;
