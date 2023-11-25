import Notification from './notificationModels.js';
import Promotion from './promotionModels.js';
import User from './usersModels.js'
import Transaction from './transactionsModels.js';





Transaction.belongsTo(User, {foreignKey: 'sender_id'});
User.hasMany(Transaction, {foreignKey: 'sender_id'});

Transaction.belongsTo(Promotion, {foreignKey: 'promotion_id'});
Promotion.hasMany(Transaction, {foreignKey: 'promotion_id'});

Notification.belongsTo(Transaction, {foreignKey: 'transaction_id'});
Transaction.hasMany(Notification, {foreignKey: 'transaction_id'});



  
export default { Notification, Promotion , User, Transaction};