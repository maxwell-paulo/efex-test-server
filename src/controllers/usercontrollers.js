import handleServerError from "../utils/serverError.js";
import { createdUser } from "../repositories/userRepository.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await createdUser({ name, email, password });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { registerUser };
