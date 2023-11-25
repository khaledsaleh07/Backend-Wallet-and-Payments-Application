import express from 'express';
import sequilize from './config/dbconfig.js';
import dotenv from 'dotenv';
import cors from 'cors';



import notificationRoutes from "./routes/notificationRoutes.js";
import promotionRoutes from "./routes/promotionRoutes.js";
import userRoutes from "./routes/userRoutes.js"

const app = express();
//port

const PORT =  8000;
sequilize.sync()   

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.get('/',(req,res)=>{
 res.send("hello world")
})


app.use('/notification', notificationRoutes)
app.use('/promotion', promotionRoutes)
app.use('/user', userRoutes)

//server

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
