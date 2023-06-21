import { Router } from "express";

const cookie_router = Router();

// Para setear una cookie (con firma)
cookie_router.get("/set", (req, res) => {
  return res
    .status(200)
    .cookie("nombre_de_la_clave", "objeto", { maxAge: 20000, signed: true })
    .json({
      success: true,
      message: "cookie seteada",
    });
});

//para leer una cookie sin firma
cookie_router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    cookies: req.cookies,
  });
});

// leer una cookie con firma
cookie_router.get("/get", (req, res) => {
  return res.status(200).json({
    success: true,
    cookies: req.signedCookies,
  });
});

// borrar una cookie
cookie_router.get("/delete", (req, res) => {
  return res.status(200).clearCookie("nombre_de_la_clave").json({
    success: true,
    message: "cookie borrada",
  });
});

// Para setear una cookie con mail (con firma)
cookie_router.get("/set/:email", (req, res) => {
  const { email } = req.params;
  return res
    .status(200)
    .cookie("user", email, { maxAge: 60000, signed: true })
    .json({
      success: true,
      message: "cookie seteada",
    });
});

export default cookie_router;
