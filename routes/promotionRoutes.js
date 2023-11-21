const productController = require("../controllers/promotionController");

const router = require("express").Router();

router.post("/addProduct", promotionController.addPromotions);

router.get("/allProduct", promotionController.getAllPromotions);

router.get("/published", promotionController.getPublishedPromotions);

router.get("/:id", promotionController.getOnePromotions);

router.put("/:id", promotionController.updatePromotions);

router.delete("/id", promotionController.deletePromotions);


module.exports=router;