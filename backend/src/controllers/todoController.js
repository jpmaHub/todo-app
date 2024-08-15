const todoService = require("../services/todoService");
const { ValidationError } = require("../middleware/errors");

const getAllTodos = (req, res, next) => {
  try {
    const todos = todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const createTodo = (req, res, next) => {
  try {
    const { title, completed = false } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = todoService.createTodo({ title, completed });
    res.status(201).json({
      message: "Todo item created successfully",
      todo: newTodo,
    });
  } catch (error) {
    next(error);
  }
};

const updateTodo = (req, res, next) => {
  try {
    const todoId = Number(req.params.id);
    const updateData = req.body;

    if (isNaN(todoId)) {
      throw new ValidationError("Invalid ID");
    }

    const updatedTodo = todoService.updateTodo(todoId, updateData);

    res.status(200).json({
      message: "Todo item updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTodo = (req, res, next) => {
  try {
    const todoId = Number(req.params.id);

    if (isNaN(todoId)) {
      throw new ValidationError("Invalid ID");
    }

    todoService.deleteTodo(todoId);
    res.status(200).json({ message: "Todo item deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
