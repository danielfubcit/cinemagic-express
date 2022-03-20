const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: { type: String, default:"None"},
    date: Date
});

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo