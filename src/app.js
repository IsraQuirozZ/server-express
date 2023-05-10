import express from "express";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";

let server = express();

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

// middlewares
server.use("/public", express.static("public"));
//para configurar la carpeta public (clase 8)
server.use(express.json());
//para interpretar mensajes de tipo JSON (clase 7)
server.use(express.urlencoded({ extended: true }));
//para que reciba datos complejos desde la url (clase 6)
server.use("/", router); //enrutador principal
server.use(errorHandler); //manejador de errores
server.use(notFoundHandler); //manejador de rutas inexistentes

export default server;
