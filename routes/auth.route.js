import express from "express"
import { login, logout, passwordReset, register } from "../controllers/auth.controller.js";

const router = express.Router();


router.get('/*', (req, res) => {
    console.log("hi");
    res.status(200).json({ message: "ok" })
})

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/passwordReset", passwordReset)


export default router;