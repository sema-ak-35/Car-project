exports.logger=(req,res,next)=>{
    console.log(`
        \n
        istek geldi\n
        METHOD:${req.method} \n
        URL:${req.url}\n`
    )

    next();
}