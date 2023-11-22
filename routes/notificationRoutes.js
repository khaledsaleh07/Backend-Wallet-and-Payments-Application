const productController = require("../controllers/notificationController");

const router = require("express").Router();

router.post("/addNotification", notificationController.createNotification);

router.get("/allNotification", notificationController.ggetAllNotifications);

router.get("/:id", notificationController.getOneNotification);

router.put("/:id", notificationController.updateNotification);

router.delete("/id", notificationController.deleteNotification);


module.exports=router;