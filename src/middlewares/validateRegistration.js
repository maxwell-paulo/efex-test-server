import pool from "../database/database.js";

export const validateRegistration = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const validarEmail = await pool.query(
      `select * from users where email = $1`,
      [email]
    );

    if (validarEmail.rowCount > 0) {
      return res.status(404).json({
        mensagem: "Já existe usuário cadastrado com o e-mail informado.",
      });
    }

    if (!name || !email || !password) {
      return res.status(400).json({
        mensagem: "Todos os campos devem ser informados",
      });
    }

    next();
  } catch (error) {
    return res.status(400).json({ mensage: error.message });
  }
};
