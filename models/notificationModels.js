import Sequelize from 'sequelize';
import db from '../config/dbconfig.js';

const Notification = db.define('notification', {
 id: {
   type: Sequelize.INTEGER,
   primaryKey: true,
   autoIncrement: true
 },
 status: {
   type: Sequelize.BOOLEAN,
   allowNull: false
 },
 received_id: {
   type: Sequelize.INTEGER,
   allowNull: false,
   references: {
     model: 'users', // assuming 'users' is the table name for User model
     key: 'id'
   }
 },
 transaction_id: {
   type: Sequelize.INTEGER,
   allowNull: false,
   references: {
     model: 'transactions', // assuming 'transactions' is the table name for Transaction model
     key: 'id'
   }
 }
});

export default Notification;
