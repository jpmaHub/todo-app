import { addTodoToApi } from '../../api/addTodoToApi';
import { API_URL } from '../../config';

describe('addTodoToApi', () => {
  it('successfully adds a new todo and returns it', async () => {
    const mockTodo = { id: 1, title: 'Test Todo', completed: false };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ todo: mockTodo }),
    });

    const result = await addTodoToApi('Test Todo');
    expect(result).toEqual(mockTodo);
    expect(fetch).toHaveBeenCalledWith(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Todo', completed: false }),
    });
  });

  it('throws an error if the fetch API fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(addTodoToApi('Test Todo')).rejects.toThrow('Error adding todo: Network error');
  });
});
