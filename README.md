# Full-Stack Todo List Application

## Overview

A simple Todo list application built with React on the frontend and Node.js with Express on the backend.

## Features

- **View todo list**: Display todo items retrieved from the backend.
- **Add new todo**: Input to add new todo items.
- **Toggle status**: Mark items as completed or uncompleted by using toggling switch.
- **Edit Todo**: Update the title of existing todo items.
- **Delete Todo**: Remove todo items from the list.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: In-memory
- **State Management**: React Context API

## Project Structure

- **`frontend/`**: Contains the React application.
- **`backend/`**: Contains the Node.js and Express server.

## Clone the repository

```bash
git clone https://github.com/jpmaHub/todo-app.git
cd todo-app
```

Follow these steps to set up the project on your local machine:

## Backend

Navigate to the `backend` directory:

```bash
cd backend
```

### Installation

```bash
npm install
```

### Running the Server

Start the server in development mode:

```bash
npm run start-server
```

The API will be available at [localhost](http://localhost:3000/api/todos)

### Running Tests

Run the test suite with:

```bash
npm test
```

## Frontend

Navigate to the `frontend` directory:

```bash
cd frontend
```

### Installation

```bash
npm install
```

### Start the development server

Ensure the backend server is running

```bash
npm run dev
```

Open the local development server at [dev-server](http://localhost:5173)

### Running Tests

Run the test suite with:

```bash
npm test
```
