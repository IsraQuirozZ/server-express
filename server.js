import express from "express";
import manager from "./products.js";

let server = express();

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

server.listen(PORT, ready);
server.use(express.json());
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

// Agregar producto
server.post("/products", async (req, res) => {
  try {
    let title = req.body.title ?? null;
    let description = req.body.description ?? null;
    let price = req.body.price ?? null;
    let thumbnail = req.body.thumbnail ?? null;
    let code = req.body.code ?? null;
    let stock = req.body.stock ?? null;
    if (title && description && price && thumbnail && code && stock) {
      let product = await manager.addProduct({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
      return res.json({
        status: 201,
        productID: product.id,
        message: "added",
      });
    } else {
      return res.json({
        status: 400,
        message: "all data is required",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: 500,
      message: "error",
    });
  }
});

// Actualizar producto
server.put("/products/:pid", (req, res) => {
  if (req.body && req.params.pid) {
    let id = Number(req.params.pid);
    let data = req.body;
    manager.updateProduct(id, data);
    return res.json({
      status: 200,
      message: "updated",
    });
  } else {
    return res.json({
      status: 400,
      message: "check data",
    });
  }
  // En este caso no necesito esperar la actualización debido a que los datos de la act, no se utilizan
  // para operar o enviar al cliente a la respuesta
});
