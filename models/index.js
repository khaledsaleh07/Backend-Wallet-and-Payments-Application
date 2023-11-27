// sync.js
import db from '../config/dbconfig.js';
import Notification from './notificationModels.js';
import Promotion from './promotionModels.js';
import Transaction from './transactionsModels.js';
import User from './usersModels.js';











db.sync()
  .then(() => {
    console.log('Tables created successfully!');
  })
  .catch((err) => {
    console.error('Error creating tables:', err);
  });


  
export default { Notification, Promotion , User, Transaction};