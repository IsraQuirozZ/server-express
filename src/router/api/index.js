import { Router } from "express";
import auth_router from "./auth.js";
// import products_router from "./products.js";
import products_router from "./products.mongo.js"; // Mongo
import carts_router from "./carts.js";
import students_router from "./students.mongo.js";
import cookies_router from "./cookies.js";
import sessions_router from "./sessions.js";

const router = Router();

router.use("/auth", auth_router);
router.use("/products", products_router);
router.use("/carts", carts_router);
router.use("/students", students_router);
router.use("/cookies", cookies_router);
router.use("/sessions", sessions_router);

export default router;
