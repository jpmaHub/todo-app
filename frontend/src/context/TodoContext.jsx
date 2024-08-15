import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchTodosFromApi } from '../api/fetchTodosFromApi';
import { addTodoToApi } from '../api/addTodoToApi';
import { updateTodo } from '../api/updateTodo';
import { deleteTodo } from '../api/deleteTodo';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await fetchTodosFromApi();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error(`Failed to fetch todos: ${error.message}`);
    }
  };

  const addTodoTask = async (title) => {
    try {
      const newTodo = await addTodoToApi(title);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error(`Failed to add todo: ${error.message}`);
    }
  };

  const deleteTodoFromList = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error(`Failed to delete todo: ${error.message}`);
    }
  };

  const updateTodoTask = async (id, title, completed) => {
    try {
      const updatedTodo = await updateTodo(id, title, completed);
      setTodos((prevTodos) =>
        prevTodos.map(todo => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error(`Failed to update todo: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodoTask, deleteTodoFromList, updateTodoTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodoContext);
};
