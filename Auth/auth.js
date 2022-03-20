const jwt = require('jsonwebtoken')

const authoriseUser = (req,res,next)=>{
    //verify the token
    jwt.verify(req.query.token,"thisismysecret",(err,data)=>{
        if(err) return res.send('Not authorized')
        //if there is no error, we will be able to save the user data
        req.user = data
        next()
    })
}

module.exports = authoriseUser