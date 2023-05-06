import { Router } from "express";
import authRouter from "./auth.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    // let hola = chau;
    return res.render(
      "index", // nombre de la vista
      {
        name: "Isra",
        // lastName: "Quiroz",
        alumnos: [
          {
            name: "Israel",
            photo:
              "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
          },
          {
            name: "Kike",
            photo:
              "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
          },
          {
            name: "Johan",
            photo:
              "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
          },
        ],
        title: "index",
        script: "/public/products.js",
      }
    );
  } catch (error) {
    next(error);
  }
});

router.use("/auth", authRouter);

export default router;
