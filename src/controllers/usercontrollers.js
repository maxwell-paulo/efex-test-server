import { createdUser } from "../repositories/userRepository.js";
import { findUserByEmail } from "../repositories/userRepository.js";
import { generateToken } from "../utils/encryptPassword.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await createdUser({ name, email, password });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and/or password not provided." });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res
        .status(401)
        .json({ mensagem: "E-mail e/ou senha inválido(s)." });
    }

    const { id } = user;
    const optionsPayload = { expiresIn: "8h" };
    const token = generateToken({ id }, optionsPayload);
    delete user.password;

    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mensagem: error.message,
    });
  }
};

export { registerUser, login };
