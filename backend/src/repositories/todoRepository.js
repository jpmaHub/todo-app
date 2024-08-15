const { NotFoundError } = require('../middleware/errors');

let todos = [];
let currentId = 1;

const getAll = () => {
  return todos;
};

const create = ({ title, completed }) => {
  const newTodo = { id: currentId++, title, completed };
  todos.push(newTodo);
  return newTodo;
};

const update = (id, { title, completed }) => {
  const todo = todos.find(t => t.id === id);
  if (!todo) throw new NotFoundError('Todo item not found');

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  return todo;
};


const deleteTodo = (id) => {
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex === -1) throw new NotFoundError('Todo item not found');

  todos.splice(todoIndex, 1);
  return true; 
};

module.exports = {
  getAll,
  create,
  update,
  delete: deleteTodo,
};
