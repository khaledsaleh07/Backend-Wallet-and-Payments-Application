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


 
});

export default Notification;
