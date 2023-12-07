import express from "express";
import { createUser, getAllUsers,getUserById, deleteUser, updateUser, getAllAdmins, getAdminById, getJustUsers , getJustUsersbyId, getAllMerchants ,  getMerchantById} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
router.get('/admins', getAllAdmins)
router.get('/admins/:id', getAdminById)
router.get('/justusers', getJustUsers)
router.get('/justusers/:id', getJustUsersbyId)
router.get('/merchants', getAllMerchants)
router.get('/merchants/:id', getMerchantById)

export default router;
