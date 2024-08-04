import { Router } from "express";
import * as userController from "./controller/user.js";
const router = Router();

router.get("/", userController.getUsersModule);
router.get("/:id", userController.getUserModule);
router.put("/:id", userController.updatedUser);
router.delete("/:id", userController.deletedUser);
export default router;
