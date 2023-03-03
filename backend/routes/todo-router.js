const express = require("express");
const todoController = require("../controllers/todo-controller");

const router = express.Router();

router
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createNewTodo);

router
  .route("/:id")
  .get(todoController.getOneTodo)
  .patch(todoController.updateOneTodo)
  .delete(todoController.deleteOneTodo);

module.exports = router;
