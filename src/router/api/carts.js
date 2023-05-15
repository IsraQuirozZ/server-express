import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  try {
    let pruebaError = hola + igna;
    return res.json({ status: 200 });
  } catch (error) {
    next(error);
  }
});
// router.post();
// router.put();
// router.delete();

export default router;
