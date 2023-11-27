import express from "express";
import { createUser, getAllUsers,getUserById, deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/createUser", createUser);
router.get("/getalluser", getAllUsers);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);
router.put('/:userId', updateUser);

export default router;