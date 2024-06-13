import express from "express"
import { login, logout, passwordReset, register } from "../controllers/auth.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/passwordReset", verifyUser,passwordReset)


export default router;