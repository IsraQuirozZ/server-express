import express from "express";
import router from "./router/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";

let server = express();

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

//inicializamos el motor de plantillas indicando dos parámetros:
//el tipo de motor
//instanciar el motor
server.engine("handlebars", engine());
//configuramos el motor instanciado
//de esta manera el servidor sabe que tiene que renderizar
//plantillas de handlebars
server.set("view engine", "handlebars");
//configuramos donde van a estar las plantillas
//se recomienda el uso de rutas absolutas con __dirname
server.set("views", __dirname + "/views");

server.use(express.urlencoded({ extended: true }));
//para que reciba datos complejos desde la url (clase 6)
server.use(express.json());
//para interpretar mensajes de tipo JSON (clase 7)
server.use("/public", express.static("public"));
//para configurar la carpeta public (clase 8)
server.use("/", router); //enrutador principal
server.use(errorHandler); //manejador de errores
server.use(notFoundHandler); //manejador de rutas inexistentes

server.listen(PORT, ready);

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
