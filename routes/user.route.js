import express from "express"
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.get("/getUsers", getUsers)
router.get("/getUser/:id", verifyUser, getUser)
router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)


export default router;