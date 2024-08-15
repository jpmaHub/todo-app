import { API_URL } from '../config';

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    
    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json(); 
  } catch (error) {
    throw new Error(`Error deleting todo: ${error.message}`);
  }
};
