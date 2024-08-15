const todoRepository = require("../repositories/todoRepository");

const getAllTodos = () => {
  return todoRepository.getAll();
};

const createTodo = (todoData) => {
  return todoRepository.create(todoData);
};

const updateTodo = (id, updateData) => {
  try {
    return todoRepository.update(id, updateData);
  } catch (error) {
    throw error;
  }
};

const deleteTodo = (id) => {
  try {
    return todoRepository.delete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
