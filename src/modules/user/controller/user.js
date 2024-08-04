import userModel from "../../../../DB/model/user.model.js";
import { asyncHandler } from "./../../../utils/errorHandle.js";

//get all users
export const getUsersModule = asyncHandler(async (req, res, next) => {
  const users = await userModel.find({});
  console.log("Users", users);
  return res.json({ message: "User module", data: users });
});
//get one user
export const getUserModule = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) {
    next(new Error("Not Found User ID"));
  }
  return res.status(200).json({ message: "Get User Data:", data: user });
});

//update User data
export const updatedUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) {
    next(new Error("Not Found User.!"));
  }
  const userUpdated = await userModel.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "User Updated Success.!", userUpdated });
});
