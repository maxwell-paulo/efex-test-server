import {
  checkEncrypt,
  validateAndGetTokenData,
} from "../utils/encryptPassword.js";
import {
  findUserByEmail,
  findUserByID,
} from "../repositories/userRepository.js";

export const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access." });
    }

    const { id } = validateAndGetTokenData(token);
    req.user = await findUserByID(id);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }

  next();
};

export const validateLoginData = async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await findUserByEmail(email);
  const isValidEncrypt = await checkEncrypt(userData?.password, password);

  if (!isValidEncrypt) {
    return res.status(401).json({ message: "Invalid email and/or password." });
  }

  next();
};
