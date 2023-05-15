import { Router } from "express";
import manager from "../../managers/Product.js";
const router = Router();

router.get("/", (req, res, next) => {
  try {
    // let cuenta = numero1 + numero2;
    return res.json({ endpoint: "/products" });
  } catch (err) {
    // console.log(err);
    next(err);
  }
});
// router.post();
// router.put();
// router.delete();

export default router;
