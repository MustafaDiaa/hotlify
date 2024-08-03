import { Router } from "express";
import * as authController from "./controller/auth.js";
const router = Router();

router.get("/", authController.getAuthModule);

export default router;
