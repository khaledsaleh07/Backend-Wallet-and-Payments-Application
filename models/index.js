// sync.js
import db from '../config/dbconfig.js';
import Notification from './notificationModels.js';
import Promotion from './promotionModels.js';
import Transaction from './transactionsModels.js';
import User from './usersModels.js';



User.hasMany(Promotion, {
  foreignKey: "userId",
  as: "promotions",
});
User.hasMany(Promotion,{
  foreignKey:"userId",
})

Promotion.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.hasMany(Transaction, {
  foreignKey: "senderId",
  as: "sentTransactions",
});

User.hasMany(Transaction, {
  foreignKey: "receiverId",
  as: "receivedTransactions",
});

Transaction.belongsTo(User, {
  foreignKey: "senderId",
  as: "sender",
});

Transaction.belongsTo(User, {
  foreignKey: "receiverId",
  as: "receiver",
});
Promotion.hasMany(Transaction, {
  foreignKey: "promotionId",
  as: "transactions",
});

Transaction.belongsTo(Promotion, {
  foreignKey: "promotionId",
  as: "promotion",
});

Notification.belongsTo(Transaction, {
  foreignKey: "transactionId",
  as: "transaction",
});

Transaction.hasMany(Notification, {
  foreignKey: "transactionId",
  as: "notifications",
});







db.sync()
  .then(() => {
    console.log('Tables created successfully!');
  })
  .catch((err) => {
    console.error('Error creating tables:', err);
  });


  
export default { Notification, Promotion , User, Transaction};