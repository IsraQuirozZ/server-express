import "dotenv/config.js";
import express from "express";
import router from "./router/index.js";
import error_handler from "./middlewares/errorHandler.js";
import not_found_handler from "./middlewares/notFoundHandler.js";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";

const server = express();

//template engine
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/views");

//middlewares
server.use("/public", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);
server.use(error_handler);
server.use(not_found_handler);

export default server;
