import { API_URL } from '../config';

export const addTodoToApi = async (newTodoTitle) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodoTitle, completed: false }),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data.todo; 
  } catch (error) {
    throw new Error(`Error adding todo: ${error.message}`);
  }
};
