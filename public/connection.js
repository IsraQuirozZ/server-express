const socket = io();
// Para enviar msjs: .emit (en este casodesde el cliente hacia el servidor)
function emit_data() {
  socket.emit(
    "primer conexión", // identificador del msj
    {
      // objeto con las propiedades a enviar (en este caso al servidor)
      name: "Isra",
      age: 22,
    }
  );
}

let selectors = document.querySelectorAll(".emit_data");
selectors.forEach((each) => each.addEventListener("click", emit_data));
// document.querySelectorAll(".emit_data").addEventListener("click", emit_data);

socket.on("contador", (data) => console.log(data));
