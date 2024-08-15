import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoApp from './components/TodoApp';

function App() {
  return (
  <TodoProvider>
    <TodoApp />
  </TodoProvider>
  );
}

export default App;
