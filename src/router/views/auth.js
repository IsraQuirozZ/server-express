import { Router } from "express";

const router = Router();

router.get("/register", async (req, res, next) => {
  try {
    return res.render("register", { title: "auth form" });
  } catch (error) {
    next(error);
  }
});

export default router;
