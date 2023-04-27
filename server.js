import express from "express";
import manager from "./products.js";

let server = express();

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

server.listen(PORT, ready);
server.use(express.urlencoded({ extended: true }));

let index_route = "/";
let index_function = (req, res) => {
  let quantity = manager.getProducts().length;
  //   console.log(products);
  return res.send(`There are ${quantity} products`);
};
server.get(index_route, index_function);

let productRoute = "/products/:id";
let productFunction = (req, res) => {
  //   let { id } = req.params;
  let params = req.params;
  let id = Number(params.id);
  let product = manager.getProductById(id);
  if (product) {
    return res.send({ success: true, product });
  } else {
    return res.send({
      success: false,
      product: `error: product ${id} not found`,
    });
  }
};
server.get(productRoute, productFunction);

let productsRoute = "/products";
let productsFunction = (req, res) => {
  let quantity = req.query.quantity ?? 5;
  let products = manager.getProducts().slice(0, quantity);
  if (products.length > 0) {
    return res.send({ success: true, products });
  } else {
    return res.send({ success: false, products: "Products not found" });
  }
};
server.get(productsRoute, productsFunction);
