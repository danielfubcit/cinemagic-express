const User = require('../Models/user')
const jwt = require('jsonwebtoken');
const config = require("../config")

const signup = (req, res)=>{
    
    const user = new User()
    //get the email & password from the req
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    user.save((err, done)=>{
        if(err) return res.status(500).send("Signup failed")
        res.status(201).send("Signed up successfully.")
    })
}

const login = (req, res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err || !user) return res.status(404).send("user not found")

        if(user.comparePassword(req.body.password)){
            //we don't want the user login agin if it is already login
            const token = jwt.sign({ id:user._id }, config.jwtKey);
            // res.send(token)
            res.send("Welcome back!")
        }else{
            res.send("Please provide a valid email address and password.")
        }
        
    })
}

module.exports = {
    signup,
    login
}