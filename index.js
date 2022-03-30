const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const config = require("./config")
const userRouter = require('./routes/user')

mongoose.connect(config.MONGODB_URL,(error)=>{
    if(error) return console.log(error)
    console.log('connected to db successfully')
  });

app.use(cors())

app.use(express.json())
app.use(userRouter)
app.listen(3000)