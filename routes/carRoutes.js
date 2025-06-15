
const express=require("express");
const { getAllCars,createCar,getSingleCar,deleteCar,updateCar} = require("../controllers");
const idControl = require("../middlewares/idControl");


//   app.get('/api/cars',(req,res)=>{
//     res.send('API/CARS tarafına  GET istek attınız')
// })
 
//  app.post('/api/cars',(req,res)=>{

//     res.send("API/CARS tarafına POST istek attınız")
//  })


const router=express.Router();


router.route('/api/cars')

 .get(getAllCars)




  .post(createCar);




 router.route('/api/cars/:id')

   .get(idControl,getSingleCar)
  .patch(idControl,updateCar)
    .delete(idControl,deleteCar)



    

  module.exports=router;