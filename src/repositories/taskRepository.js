import pool from "../database/database.js";

export const createdTask = async (taskData) => {
  const { name, description, user_id } = taskData;

  const query = `INSERT INTO tasks
      (name, description, user_id)
      VALUES ($1, $2, $3)
      returning *`;

  const params = [name, description, user_id];
  const newUser = await pool.query(query, params);

  return newUser.rows[0];
};
