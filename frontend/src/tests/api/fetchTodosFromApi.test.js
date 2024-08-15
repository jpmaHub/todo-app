import { fetchTodosFromApi } from '../../api/fetchTodosFromApi'; 
import { API_URL } from '../../config';

describe('fetchTodosFromApi', () => {
  it('successfully fetches todos and returns them', async () => {
    const mockTodos = [{ id: 1, title: 'Test Todo', completed: false }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTodos,
    });

    const result = await fetchTodosFromApi();
    expect(result).toEqual(mockTodos);
    expect(fetch).toHaveBeenCalledWith(API_URL);
  });

  it('throws an error if the fetch API fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchTodosFromApi()).rejects.toThrow('Error fetching todos: Network error');
  });
});
