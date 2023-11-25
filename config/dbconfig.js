// module.exports = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   db: 'FinTech',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
//  }
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('FinTech', 'root', '', {
    dialect: 'mysql',
    host: "localhost",
    port: '',
    // operatorAlias: false,
    // logging: false,
    // operatorsAliases: false,
  
 
});

// const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {  
        console.error('Unable to connect to the database: ', error);
    };
// };


export default sequelize ;
