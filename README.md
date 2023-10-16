# Express.js Todo List API

This is a RESTful API built with Express.js and Node.js for managing a todo list. The API allows users to create, edit, delete, and retrieve tasks. It also provides user authentication and registration functionality. To run the API locally, you will need to connect it to a PostgreSQL database and set up the required dependencies.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1.  Clone the repository:

    `git clone https://github.com/maxwell-paulo/efex-test-server.git`

2.  Navigate to the project directory:

    `cd efex-test-server`

3.  Install the project dependencies:

    `npm install`

4.  Create a PostgreSQL database. You can use the provided `dump.sql` file to create the necessary tables and initial data.

## Configuration

Open the `.env` file and set your environment variables, including the database connection details:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_list_db
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
SECRET_KEY=your_secret_key`

## Running the API

To start the API, run the following command:

`npm run dev`

The API will run on port 3000 by default. You can access it at `http://localhost:3000`.

## API Endpoints

- `POST /api/user`: Register a new user.
- `POST /api/login`: Log in with an existing user.
- `GET /api/task`: Get a list of logged user tasks.
- `PATCH /api/task`: Update the column done of the table tasks.
- `PATCH /api/task/:id`: Update a user task by ID.
- `DELETE /api/task/:id`: Delete a task by ID.
