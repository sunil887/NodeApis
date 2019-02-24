var logger = function(req,res,next){
    console.log('loging...........');
    next();
}


module.exports.logger = logger;