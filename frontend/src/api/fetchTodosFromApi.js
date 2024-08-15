import { API_URL } from '../config';

export const fetchTodosFromApi = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching todos: ${error.message}`);
  }
};
