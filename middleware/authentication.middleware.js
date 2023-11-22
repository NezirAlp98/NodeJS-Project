const validateMail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}



const authenticationMiddleware=(req,res,next)=>{
    const token=req.headers.authorization
    const userMail=req.headers.usermail

    if (!token || token.length<12 || !validateMail(userMail)) {
        return res.status(401).send({error:"Invalid token or user mail"});
    }
    next();
}

module.exports=authenticationMiddleware;