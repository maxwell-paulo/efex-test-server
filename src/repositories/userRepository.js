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
