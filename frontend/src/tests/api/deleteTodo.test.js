import { deleteTodo } from '../../api/deleteTodo'; 
import { API_URL } from '../../config';

describe('deleteTodo', () => {
  it('successfully deletes a todo and return the response', async () => {
    const mockResponse = { success: true };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await deleteTodo(1);
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/1`, { method: 'DELETE' });
  });

  it('throws an error if the fetch API fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(deleteTodo(1)).rejects.toThrow('Error deleting todo: Network error');
  });
});
