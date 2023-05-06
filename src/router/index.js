import { Router } from "express";
import api_router from "./api/index.js";
import view_router from "./views/index.js";

const router = Router();

router.use("/api", api_router); // Todas las rutas de la api rest van a tener el endpoint "/api"
router.use("/", view_router); // Todas las rutas de la api rest van a tener el endpoint "/" (libre)

export default router;
