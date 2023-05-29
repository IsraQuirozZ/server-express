import { Router } from "express";
import Product from "../../models/product.model.js";
import manager from "./../../managers/Product.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    let product = await Product.create(req.body);
    if (product) {
      return res.json({ status: 201, message: "product created" });
    }
    return res.json({ status: 400, message: "not created" });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    let products = await Product.find();
    if (products.length > 0) {
      return res.json({ status: 200, products });
    }
    return res.json({ status: 404, message: "not found" });
  } catch (error) {
    next(error);
  }
});

router.get("/:pid", async (req, res, next) => {
  try {
    let id = req.params.pid;
    let product = await Product.findById(id);
    if (product) {
      return res.json({ status: 200, product });
    }
    let message = "not found";
    return res.json({ status: 404, message });
  } catch (error) {
    next(error);
  }
});
router.put("/:pid", async (req, res, next) => {
  try {
    let id = req.params.pid;
    let data = req.body;
    let response = await Product.findByIdAndUpdate(id, data, { new: true });
    // let response = await Product.updateOne({_id: id},data);
    if (response) {
      return res.json({ status: 200, message: "product updated", response });
    }
    return res.json({ status: 404, message: "not found" });
  } catch (error) {
    next(error);
  }
});
router.delete("/:pid", async (req, res, next) => {
  try {
    let id = req.params.pid;
    let response = await Product.findByIdAndDelete(id);
    // let response = await Product.deleteOne({_id: id});
    if (response) {
      return res.json({ status: 200, message: "product deleted", response });
    }
    return res.json({ status: 404, message: "not found" });
  } catch (error) {
    next(error);
  }
});

export default router;
