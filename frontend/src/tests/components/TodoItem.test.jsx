import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../../components/TodoItem';
import { useTodos } from '../../context/TodoContext';
import '@testing-library/jest-dom';

vi.mock('../../context/TodoContext', () => ({
  useTodos: vi.fn(),
}));

vi.mock('@mui/material/Switch', () => ({
  __esModule: true,
  default: ({ checked, onChange }) => (
    <input
      type="checkbox"
      data-testid="mock-switch"
      checked={checked}
      onChange={onChange}
      role="switch"
    />
  ),
}));

describe('TodoItem', () => {
  const updateTodoTask = vi.fn();
  const deleteTodoFromList = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const setup = (todo) => {
    useTodos.mockReturnValue({
      updateTodoTask,
      deleteTodoFromList,
    });
    render(<TodoItem todo={todo} />);
  };

  it('renders and toggles the switch', () => {
    const fakeTodo = { id: 1, title: 'Test Todo', completed: false };

    setup(fakeTodo);

    const switchElement = screen.getByTestId('mock-switch');
    fireEvent.click(switchElement);

    expect(updateTodoTask).toHaveBeenCalledWith(fakeTodo.id, fakeTodo.title, !fakeTodo.completed);
  });

  it('enters edit mode on title click and updates the title', () => {
    const fakeTodo = { id: 1, title: 'Test Todo', completed: false };

    setup(fakeTodo);

    const titleElement = screen.getByText(fakeTodo.title);
    fireEvent.click(titleElement);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Updated Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(updateTodoTask).toHaveBeenCalledWith(fakeTodo.id, 'Updated Todo', fakeTodo.completed);
  });

  it('calls deleteTodoFromList when delete button is clicked', () => {
    const fakeTodo = { id: 1, title: 'Test Todo', completed: false };

    setup(fakeTodo);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(deleteTodoFromList).toHaveBeenCalledWith(fakeTodo.id);
  });
});
