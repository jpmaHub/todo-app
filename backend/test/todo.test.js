const request = require('supertest');
const app = require('../src/app/index'); 

describe('Todo API', () => {
  const endpoint = '/api/todos';

  const makeRequest = (method, url, data = {}) => {
    const req = request(app)[method](url);
    return method === 'get' || method === 'delete' ? req : req.send(data);
  };

  it('fetches all todos', async () => {
    const res = await makeRequest('get', endpoint);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('creates a new todo', async () => {
    const newTodo = { title: 'New Task', completed: false };
    const res = await makeRequest('post', endpoint, newTodo);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('todo');
    expect(res.body.todo).toMatchObject(newTodo);
    expect(res.body).toHaveProperty('message', 'Todo item created successfully');
  });

  it('returns 400 if title is missing during creation', async () => {
    const res = await makeRequest('post', endpoint, { completed: false });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Title is required');
  });

  it('updates an existing todo', async () => {
    const updatedTodo = { title: 'Updated Task', completed: true };
    const res = await makeRequest('put', `${endpoint}/1`, updatedTodo);

    expect(res.statusCode).toBe(200);
    expect(res.body.todo).toMatchObject(updatedTodo);
    expect(res.body).toHaveProperty('message', 'Todo item updated successfully');
  });

  it('returns 400 if ID is invalid during update', async () => {
    const res = await makeRequest('put', `${endpoint}/invalid-id`, { title: 'Invalid Update' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid ID');
  });

  it('deletes a todo', async () => {
    const res = await makeRequest('delete', `${endpoint}/1`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Todo item deleted successfully');
  });

  it('returns 400 if ID is invalid during deletion', async () => {
    const res = await makeRequest('delete', `${endpoint}/invalid-id`);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error', 'Invalid ID');
  });
});

