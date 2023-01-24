exports.errorHandler = (error, req, res, next) => {
    console.log(error.name); 
    if(error.name == "SequelizeUniqueConstraintError"){
        return res.status(409).send('This email already exist!');
    } 
    return res.status(error.statusCode).send(error.message);
};
