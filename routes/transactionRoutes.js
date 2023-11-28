import { Router } from 'express';
const router = Router();

import { addTransaction,
    getAllTransaction,
    updateTransaction,
   getOneTransaction,
   deleteTransaction,} from "../controllers/transactionController.js"

router.post("/addTransaction", addTransaction);

router.get("/allTransaction", getAllTransaction);

router.get("/:id", getOneTransaction);

router.put("/update/:id",  updateTransaction);

router.delete("/:TransactionId", deleteTransaction);

export default router;
