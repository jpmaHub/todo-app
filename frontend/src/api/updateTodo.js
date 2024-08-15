import { API_URL } from '../config';

export const updateTodo = async (id, updateTitle, completed) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: updateTitle, completed }),
    });

    if (!response.ok) {
      throw new Error('Failed to update todo');
    }

    const data = await response.json();
    return data.todo; 
  } catch (error) {
    throw new Error(`Error updating todo: ${error.message}`);
  }
};