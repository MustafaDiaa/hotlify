import userModel from "../../../../DB/model/user.model.js";
import { generateToken } from "../../../utils/generateAndVerifyToken.js";
import { compare, hash } from "../../../utils/hashAndCompare.js";

export const getAuthModule = (req, res, next) => {
  return res.json({ message: "Auth module" });
};

export const signup = async (req, res, next) => {
  try {
    const { username, email, password, firstName, lastName, phone } = req.body;
    console.log({ username, email, firstName, lastName, phone, password });

    const user = await userModel.findOne({ email });

    if (user) res.json({ message: "Email exists" });

    const hashPassword = hash({ plaintext: password });
    const createUser = await userModel.create({
      username,
      email,
      firstName,
      lastName,
      phone,
      password: hashPassword,
    });
    return res.json({ message: "Done", user: createUser._id });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });

    const user = await userModel.findOne({ email });

    if (!user) return res.json({ message: "Email is invalid" });

    const match = compare({
      plaintext: password,
      hashValue: user.password,
    });
    if (!match) return res.json({ message: "Password is invalid" });

    const access_token = generateToken({
      payload: { id: user._id, isLogged: true, role: user.role },
    });
    user.status = "online";
    await user.save();
    return res.json({ message: "Done", access_token });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};
