import dotenv from "dotenv";
import pkg from "pg";

const { Pool } = pkg;
dotenv.config();

const { DB_USER, DB_PORT, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_URI } =
  process.env;

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  url: DB_URI,
});

export default pool;
