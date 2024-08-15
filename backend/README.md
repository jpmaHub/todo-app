# Todo List API

This project is a simple REST API for managing a todo list, built with Node.js and Express. The API allows you to perform basic CRUD operations (Create, Read, Update, Delete) on todo items, with the data stored in memory.


The following API endpoints are available for managing the todo items:

### 1. Get All Todo Items

- **Endpoint**: `GET /api/todos`
- **Description**: Retrieve a list of all todo items.
- **Response**:
  - Status: `200 OK`
  - Body: Array of todo items

**Example Request**:

```bash
curl -X GET http://localhost:3000/api/todos
```

### 2. Create a New Todo Item

- **Endpoint**: `POST /api/todos`
- **Description**: Create a new todo item.
- **Request Body**:
  - title (string): The title of the todo item.
  - completed (boolean): Whether the item is completed. Defaults to false.
- **Response**:
  - Status: 201 Created
  - Body: The newly created todo item.

**Example Request**:

```bash
  curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy item", "completed": false}'
```

### 3. Update a Todo Item by ID

- **Endpoint**: `PUT /api/todos/:id`
- **Description**: Update a todo item by its ID.
- **URL Parameters**:
  - `id` (number, required): The ID of the todo item to update.
- **Request Body**:
  - `title` (string): The updated title of the todo item.
  - `completed` (boolean): The updated completion status.
- **Response**:
  - **Status**: `200 OK`
  - **Body**: The updated todo item.

**Example Request**:

```bash
curl -X PUT http://localhost:3000/api/todos/2 \
-H "Content-Type: application/json" \
-d '{"title": "buy cheese", "completed": true}'
```

### 4. Delete a Todo Item

- **Endpoint**: `DELETE /api/todos/:id`
- **Description**: Delete a todo item by its ID.
- **URL Parameters**:
  - id (number, required): The ID of the todo item to delete.
- **Response**:
  - Status: `200 OK`

**Example Request**:

```bash
curl -X DELETE http://localhost:3000/api/todos/2
```
