import pool from "../database/database.js";

export const createdTask = async (taskData) => {
  const { name, description, user_id, done } = taskData;

  const query = `INSERT INTO tasks
      (name, description, user_id, done)
      VALUES ($1, $2, $3, $4)
      returning *`;

  const params = [name, description, user_id, done];
  const newTask = await pool.query(query, params);

  return newTask.rows[0];
};

export const userTasks = async (userId) => {
  const query = `SELECT id, name, description, done FROM tasks
  WHERE user_id = $1;`;

  const params = [userId];

  const tasks = await pool.query(query, params);

  return tasks.rows;
};

export const isDone = async (taskId) => {
  const query = `UPDATE tasks
  SET done = NOT done
  WHERE id = $1;`;

  const params = [taskId];

  return await pool.query(query, params);
};
