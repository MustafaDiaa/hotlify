import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_LOCAL)
    .then((result) => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to Database");
    });
};

export default connectDB;
