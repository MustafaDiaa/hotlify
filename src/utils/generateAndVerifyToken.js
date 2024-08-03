import jwt from "jsonwebtoken";

export const generateToken = ({
  payload,
  signature = process.env.TOKEN_SIGNATURE,
  expiresIn = 60 * 30,
} = {}) => {
  const token = jwt.sign(payload, signature, {
    expiresIn: parseInt(expiresIn),
  });
  return token;
};

export const verifyToken = ({
  payload,
  signature = process.env.TOKEN_SIGNATURE,
} = {}) => {
  const decoded = jwt.verify(payload, signature);
  return decoded;
};
