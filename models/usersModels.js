// usersModels.js
import { DataTypes } from 'sequelize';
import db from '../config/dbconfig.js';
import Transaction from "./transactionsModels.js"

const User = db.define('user', {
 id: {
   type: DataTypes.INTEGER,
   primaryKey: true,
   autoIncrement: true,
   
 },

 balance_usd: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: false,
   defaultValue: 0.00
 },
 balance_usdt: {
   type: DataTypes.DECIMAL(10, 2),
   allowNull: false,
   defaultValue: 0.00
 },
 email: {
   type: DataTypes.STRING(255),
   allowNull: false,
   unique: true
 },
 username: {
   type: DataTypes.STRING(255),
   allowNull: false,
   unique: true
 },
 password: {
   type: DataTypes.STRING(255),
   allowNull: false
 },
 status: {
   type: DataTypes.ENUM('active', 'inactive'),
   allowNull: false,
   defaultValue: 'active'
 },
 role: {
   type: DataTypes.ENUM('user', 'admin', 'merchant'),
   allowNull: false,
   defaultValue: 'user'
 }
});

// validate Register User
function validateRegisterUser(obj){
  const schema = Joi.object({
     username:Joi.string().trim().min(2).max(100).required(),
     email:Joi.string().trim().min(5).max(100).required().email(),
     password:Joi.string().trim().min(8).required(),
  });
  return register.validate(obj);
}




export default User;
