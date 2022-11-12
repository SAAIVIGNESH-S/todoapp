const express = require("express");

const router = express.Router();

const todoController = require('../controller/todo_controller');

router.get("/", todoController.getTodos);
router.post("/add", todoController.addTodo);
router.put("/update", todoController.updateTodo);
router.delete("/delete", todoController.deleteTodo);

module.exports = router;