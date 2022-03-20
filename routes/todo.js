const express = require('express');
const router = express.Router();
const { getTodos, createTodo, getTodoById} = require('../Controller/todos')
const authoriseUser = require('../Auth/auth')

//go the the autoriseUser, then getTodos
// router.get('/todos',authoriseUser, getTodos)
router.get('/todos', getTodos)

router.post('/new/todo', createTodo)

router.get('/todo/:id', getTodoById)

module.exports = router

