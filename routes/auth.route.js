import express from "express"
import { register } from "module";
import { login, logout, passwordReset } from "../controllers/auth.controller";

const router = express.Router();


router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/passwordReset", passwordReset)


export default router;