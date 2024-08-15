import { updateTodo } from '../../api/updateTodo';
import { API_URL } from '../../config';

describe('updateTodo', () => {
  it('should successfully updates a todo and return the updated todo', async () => {
    const mockTodo = { id: 1, title: 'Updated Todo', completed: true };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ todo: mockTodo }),
    });

    const result = await updateTodo(1, 'Updated Todo', true);
    expect(result).toEqual(mockTodo);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/1`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Updated Todo', completed: true }),
    });
  });

  it('throws an error if the fetch API fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(updateTodo(1, 'Updated Todo', true)).rejects.toThrow('Error updating todo: Network error');
  });
});
