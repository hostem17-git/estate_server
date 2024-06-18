import express from "express"
import { verifyUser } from "../middleware/verifyUser.js";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", verifyUser, addPost)
router.put("/:id", verifyUser, updatePost)
router.delete("/:id", verifyUser, deletePost)


export default router;