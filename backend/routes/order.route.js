import { placeOrder, verifyOrder } from "../controllers/order.controller.js";
import {Router} from 'express';
import authMiddleware from "../middlewares/auth.js";

const orderRouter = Router();

orderRouter.post("/place-order",authMiddleware,placeOrder);
orderRouter.post("/verify-order",verifyOrder);

export default orderRouter;