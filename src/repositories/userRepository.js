import pool from "../database/database.js";
import { encryptPassword } from "../utils/encryptPassword.js";

export const createdUser = async (userData) => {
  const { name, email, password } = userData;

  const query = `INSERT INTO users
    (name, email, password)
    VALUES ($1, $2, $3)
    returning *`;

  const params = [name, email, await encryptPassword(password)];
  const newUser = await pool.query(query, params);

  return newUser.rows[0];
};

export const findUserByEmail = async (email) => {
  const query = `select * from users
    where email = $1`;

  const params = [email];
  const result = await pool.query(query, params);

  return result.rows[0];
};

export const findUserByID = async (id) => {
  const query = `select id, name, email from users where id = $1`;

  const params = [id];
  const result = await pool.query(query, params);

  return result.rows[0];
};
