import express from "express";
import { addUser, getAllUsers,getUserById, deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/addUser", addUser);
router.get("/getalluser", getAllUsers);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);
router.put('/:userId', updateUser);

export default router;