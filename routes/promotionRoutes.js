const productController = require("../controllers/promotionController");

const router = require("express").Router();

router.post("/addPromotion", promotionController.addPromotions);

router.get("/allPromotion", promotionController.getAllPromotions);

router.get("/published", promotionController.getPublishedPromotions);

router.get("/:id", promotionController.getOnePromotions);

router.put("/:id", promotionController.updatePromotions);

router.delete("/id", promotionController.deletePromotions);


module.exports=router;