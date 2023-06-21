import express from "express";
import "dotenv/config.js";
import { connect } from "mongoose";
import router from "./router/index.js";
import error_handler from "./middlewares/errorHandler.js";
import not_found_handler from "./middlewares/notFoundHandler.js";
// import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import cookieParser from "cookie-parser";
import expressSession from "express-session";

const server = express();

//template engine
// server.engine("handlebars", engine());
// server.set("view engine", "handlebars");
// server.set("views", __dirname + "/views");

//middlewares
// server.use(cookieParser(process.env.SECRET_COOKIE));
server.use(cookieParser("hola1234"));
server.use(
  expressSession({
    // secret: process.env.SECRET_SESSION,
    secret: "chau1234",
    resave: true,
    saveUninitialized: true,
  })
);
server.use("", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);
server.use(error_handler);
server.use(not_found_handler);

//database
connect(
  "mongodb+srv://admin-Isra:admin-Isra@cluster0.cpaxw.mongodb.net/testCommerce"
) // Link de conexión (URI)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

export default server;
