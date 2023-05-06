import { Router } from "express";
import product_router from "./products.js";
import cart_router from "./carts.js";

const router = Router();

router.use("/products", product_router);
router.use("/carts", cart_router);

export default router;
// Enrutador principal de la api (para enviar datos)
// Acá llamo solamente al enrutador de los recursos (product, cart, etcs)
