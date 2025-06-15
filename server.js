 const express=require ('express');
const carRoutes = require('./routes/carRoutes');
const { logger } = require('./middlewares/logger');



 const app=express();

 const PORT=3000;

app.use(express.json());

app.use(logger)



 app.use(carRoutes)


 app.listen(PORT,()=>{
    console.log(`Sunucu ${PORT} portundu dinlemeye başladı.`)
 })