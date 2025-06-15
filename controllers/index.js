
const fs=require('fs');
const crypto=require('crypto');
const write=require('../utils/write')

console.log(__dirname)
console.log(__filename)


let cars=JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`,'utf-8')
)


const getAllCars=(req,res)=>{
  res.status(200).json({
    success:true,
    message:"Araç verileri alındı",
    result:cars.length,
    data:cars
  })}


   






  
const createCar=(req,res)=>{

    const newCar={...req.body,id: crypto.randomUUID()}

    cars.push(newCar)

 write(cars)
   

 console.log(req.body)

  res.status(201).json({
    success:true,
    message:"Araba başarıyla eklendi.",
    data:newCar
  })}


 const getSingleCar=(req,res)=>{

console.log('aranan araba :',req.car)

 return res.send({
    success:true,
    message:"Aradığınız araba başarıyla bulundu",
    data:req.car
 })

   
 }


 const deleteCar=(req,res)=>{
    cars=cars.filter((car)=>car.id !== req.params.id)

    write(cars)
     res.status(200).json({
        success:true,
        message:"Araç başarı ile silindi."
     })
 }

   
  const updateCar=(req,res)=>{
    
    const updates=req.body;
    console.log(req.car)
    console.log(updates)

    const updatedCar={...req.car, ...updates}

    const index=cars.findIndex((car)=>car.id==updatedCar.id)

    cars[index]=updatedCar;

    write(cars)

    res.status(200).send({
        success:true,
        message:"Araba başarıyla güncellendi",
        data:updatedCar
    })
  }


  module.exports={getAllCars,createCar,getSingleCar,deleteCar,updateCar}