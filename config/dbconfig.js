
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('FINTECH', 'root', '', {
    dialect: 'mysql',
    host: "localhost",
    port: '',
  
 
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {  
        console.error('Unable to connect to the database: ', error);
    };
};


export default sequelize ;
