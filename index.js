const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo');
const config = require("./config")
const userRouter = require('./routes/user')

//at the same time, it is going to connect to the database
mongoose.connect(config.MONGODB_URL,(error)=>{
    if(error) return console.log(error)
    console.log('connected to db successfully')
  });

app.use(cors())

app.get("/data", (req,res)=>{
    res.json([
        {
            "name":"Daniel"
        },
        {
            "name":"John"
        }
    ])
})

app.use(express.json())
app.use(todoRouter)
app.use(userRouter)
app.listen(3000)