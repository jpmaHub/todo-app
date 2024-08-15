import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../../components/TodoList';
import { useTodos } from '../../context/TodoContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';

vi.mock('../../context/TodoContext', () => ({
  useTodos: vi.fn(),
}));

const renderWithTheme = (ui) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('TodoList', () => {

  const mockTodos = (todos) => {
    useTodos.mockReturnValue({ todos });
  };

  it('renders TodoItem components for each todo', () => {
    const fakeTodos = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ];

    mockTodos(fakeTodos);

    renderWithTheme(<TodoList />);

    fakeTodos.forEach(todo => {
      expect(screen.getByText(todo.title)).toBeInTheDocument();
    });
  });

  it('renders nothing if there are no todos', () => {
    mockTodos([]);

    renderWithTheme(<TodoList />);

    expect(screen.queryByText(/Todo/)).toBeNull();
  });
});
