import connectDB from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import userRouter from "./modules/user/user.router.js";

const initApp = (app, express) => {
  //Convert Buffer Data
  app.use(express.json({}));

  // Hotlify Routing
  app.get("/", (req, res) => res.send("Hello World!"));
  app.use("/auth", authRouter);
  app.use("/user", userRouter);

  app.all("*", (req, res) => {
    return res.json({ message: "404 Page Not Found" });
  });

  //Connection Database
  connectDB();
};

export default initApp;
