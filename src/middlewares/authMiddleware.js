import {
  checkEncrypt,
  validateAndGetTokenData,
} from "../utils/encryptPassword.js";
import { findUserByEmail } from "../repositories/userRepository.js";

export const validateLoginData = async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await findUserByEmail(email);
  const isValidEncrypt = await checkEncrypt(userData?.password, password);

  if (!isValidEncrypt) {
    return res.status(401).json({ message: "Invalid email and/or password." });
  }

  next();
};
