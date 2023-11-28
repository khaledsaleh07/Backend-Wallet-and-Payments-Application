import express from 'express';
import sequilize from './config/dbconfig.js';
import dotenv from 'dotenv';
import cors from 'cors';
import db from "./config/dbconfig.js"
import relation from  './models/index.js'



import notificationRoutes from "./routes/notificationRoutes.js";
import promotionRoutes from "./routes/promotionRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import transactionRouter from "./routes/transactionRoutes.js"


dotenv.config();
const app = express();
//port


const port = process.env.PORT; 
sequilize.sync()   

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.get('/',(req,res)=>{
 res.send("hello world")
})


app.use('/transaction', transactionRouter )
app.use('/notification', notificationRoutes)
app.use('/promotion', promotionRoutes)
app.use('/user', userRoutes)

//server

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
