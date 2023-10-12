CREATE TABLE users (
	id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha TEXT NOT NULL
)

CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT DEFAULT 'daily task',
  user_id INTEGER REFERENCES users(id)
)