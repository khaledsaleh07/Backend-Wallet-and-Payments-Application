import { Router } from 'express';
const router = Router();

import { getAllNotifications ,createNotification, getOneNotification, updateNotification, deleteNotification} from "../controllers/notificationController.js";

  
  



router.post("/addNotification", createNotification);

router.get("/allNotification", getAllNotifications);

router.get("/:id",getOneNotification);

router.put("/:id", updateNotification);

router.delete("/:id",deleteNotification);


export default router