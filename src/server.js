import server from "./app.js";
import { Server } from "socket.io";

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

let http_server = server.listen(PORT, ready);
let socket_server = new Server(http_server);

let contador = 0;
socket_server.on(
  // on sirve para escuchar los msj que llegan del cliente
  "connection", // Identificador del mensaje a escuchar
  (socket) => {
    // callback que se ejecuta cuando se conecta un cliente
    // console.log(socket);
    console.log(`client ${socket.client.id} connected`);
    socket.on("primer conexión", (data) => {
      console.log(data.name);
      contador++;
      socket_server.emit("contador", { contador });
    });
  }
);

// PRODUCTS
// let index_route = "/";
// let index_function = (req, res) => {
//   let quantity = manager.getProducts().length;
//   //   console.log(products);
//   return res.send(`There are ${quantity} products`);
// };
// server.get(index_route, index_function);

// let productRoute = "/products/:id";
// let productFunction = (req, res) => {
//   //   let { id } = req.params;
//   let params = req.params;
//   let id = Number(params.id);
//   let product = manager.getProductById(id);
//   if (product) {
//     return res.send({ success: true, product });
//   } else {
//     return res.send({
//       success: false,
//       product: `error: product ${id} not found`,
//     });
//   }
// };
// server.get(productRoute, productFunction);

// let productsRoute = "/products";
// let productsFunction = (req, res) => {
//   let quantity = req.query.quantity ?? 5;
//   let products = manager.getProducts().slice(0, quantity);
//   if (products.length > 0) {
//     return res.send({ success: true, products });
//   } else {
//     return res.send({ success: false, products: "Products not found" });
//   }
// };
// server.get(productsRoute, productsFunction);

// // Agregar producto
// server.post("/products", async (req, res) => {
//   try {
//     let title = req.body.title ?? null;
//     let description = req.body.description ?? null;
//     let price = req.body.price ?? null;
//     let thumbnail = req.body.thumbnail ?? null;
//     let code = req.body.code ?? null;
//     let stock = req.body.stock ?? null;
//     if (title && description && price && thumbnail && code && stock) {
//       let product = await manager.addProduct({
//         title,
//         description,
//         price,
//         thumbnail,
//         code,
//         stock,
//       });
//       return res.json({
//         status: 201,
//         productID: product.id,
//         message: "added",
//       });
//     } else {
//       return res.json({
//         status: 400,
//         message: "all data is required",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.json({
//       status: 500,
//       message: "error",
//     });
//   }
// });

// // Actualizar producto
// server.put("/products/:pid", (req, res) => {
//   if (req.body && req.params.pid) {
//     let id = Number(req.params.pid);
//     let data = req.body;
//     manager.updateProduct(id, data);
//     return res.json({
//       status: 200,
//       message: "updated",
//     });
//   } else {
//     return res.json({
//       status: 400,
//       message: "check data",
//     });
//   }
//   // En este caso no necesito esperar la actualización debido a que los datos de la act, no se utilizan
//   // para operar o enviar al cliente a la respuesta
// });

// // Borrar producto
// server.delete("/products/:pid", (req, res) => {
//   let id = Number(req.params.pid);
//   console.log(req.params);
//   manager.deleteProduct(id);
//   if (req.params.pid) {
//     return res.json({
//       status: 200,
//       message: "deleted",
//     });
//   } else {
//     return res.json({
//       success: 400,
//       message: "not found product to delete",
//     });
//   }
// });
