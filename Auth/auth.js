const jwt = require('jsonwebtoken')
const config = require("../config")

const authoriseUser = (req,res,next)=>{
    jwt.verify(req.query.token, config.jwtKey,(err,data)=>{
        if(err) return res.send('Not authorized')
        req.user = data
        next()
    })
}

module.exports = authoriseUser