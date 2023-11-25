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

  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount_type: {
    type: DataTypes.ENUM('credit', 'debit'),
    allowNull: false
  },
});

// Define associations
Transaction.belongsTo(User, { foreignKey: 'sender_id' });
Transaction.belongsTo(Promotion, { foreignKey: 'promotion_id' });

await db.sync({ force: false });


export default Transaction;
