import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const userScheme = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: Number,
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female"],
    },
    phone: {
      type: String,
      required: true,
    },
    profilePic: String,
    coverPic: String,
    address: String,
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    confirmPhone: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "offline",
      enum: ["online", "offline", "blocked"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "hotelManager", "admin"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || model("User", userScheme);
export default userModel;
