const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Todo = model('Todo', todoSchema);

module.exports = {
  Todo,
};
