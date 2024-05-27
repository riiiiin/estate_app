import express from "express"
import { getUsers, getUser, deleteUser, updateUser } from "../controllers/user.controller";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", verifyToken, getUser);
router.post("/:id", verifyToken, updateUser);
router.delete("/id", verifyToken, deleteUser);

export default router;