import { Router } from 'express';
const router = Router();

import { addPromotions,
   getAllPromotions,
   getOnePromotions,
   updatePromotions,
   deletePromotions,
   getPublishedPromotions,} from "../controllers/promotionController.js"

router.post("/addPromotion", addPromotions);

router.get("/allPromotion", getAllPromotions);

router.get("/published", getPublishedPromotions);

router.get("/:id", getOnePromotions);

router.put("/:id", updatePromotions);

router.delete("/id", deletePromotions);

export default router;
