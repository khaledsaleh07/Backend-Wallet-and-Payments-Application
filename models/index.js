// sync.js
import db from '../config/dbconfig.js';
import Notification from './notificationModels.js';
import Promotion from './promotionModels.js';
import Transaction from './transactionsModels.js';
import User from './usersModels.js';

// Define associations (as you've already done)
Transaction.belongsTo(User, { foreignKey: 'sender_id' });
User.hasMany(Transaction, { foreignKey: 'sender_id' });

Transaction.belongsTo(Promotion, { foreignKey: 'promotion_id' });
Promotion.hasMany(Transaction, { foreignKey: 'promotion_id' });

Notification.belongsTo(Transaction, { foreignKey: 'transaction_id' });
Transaction.hasMany(Notification, { foreignKey: 'transaction_id' });






// Sync all defined models to the database
db.sync()
  .then(() => {
    console.log('Tables created successfully!');
  })
  .catch((err) => {
    console.error('Error creating tables:', err);
  });


  
export default { Notification, Promotion , User, Transaction};