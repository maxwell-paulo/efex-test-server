import pool from "../database/database.js";

export const createdTask = async (taskData) => {
  const { name, description, user_id, done } = taskData;

  const query = `INSERT INTO tasks
      (name, description, user_id, done)
      VALUES ($1, $2, $3, $4)
      returning *`;

  const params = [name, description, user_id, done];
  const newUser = await pool.query(query, params);

  return newUser.rows[0];
};
