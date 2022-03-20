const Todo = require('../Models/todo')

const getTodos = (req,res)=>{
  Todo.find({},(err,todos)=>{
    res.json(todos)
  })
}

//to make change
const createTodo = (req,res)=>{
  const todo = new Todo()
  todo.task = req.body.task
  todo.date = req.body.date
  todo.user = req.body.user

  //save the data for us in the database
  todo.save((err,data)=>{
    if(err) return res.status(400).send('something went wrong')

    //send back the data to us if no error
    res.status(201).json("Created todo successfully")
  })

}

const getTodoById = (req,res)=>{
    let todo = Todos.filter(item => item.id == req.params.id)
    res.json(todo)
}


module.exports = {
  getTodos,
  createTodo,
  getTodoById,
}