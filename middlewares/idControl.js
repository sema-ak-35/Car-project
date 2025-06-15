const fs=require('fs')


let cars=JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`,'utf-8'))


    module.exports=(req,res,next)=>{
        const searchedCar=cars.find((car)=>car.id==req.params.id);

        if(!searchedCar){
            return res.status(404).send({
                success:false,
                message:"Gönderilen ID'ye ait araç bulunamadı"
            })
        }

        req.car = searchedCar;

        next();
    }