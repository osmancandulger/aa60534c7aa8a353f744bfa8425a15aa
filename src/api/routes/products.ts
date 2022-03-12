import { Router } from "express";
import apicache from "apicache";
import { getProducts } from "../controllers/ProductsController";
const router = Router();

router.get("/products", getProducts);
export default router;
