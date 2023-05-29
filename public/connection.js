const socket = io();

function emit_data() {
  socket.emit("primer conexión", {
    name: "isra",
    age: 22,
  });
}

let selectors = document.querySelectorAll(".emit_data");
selectors.forEach((selector) => selector.addEventListener("click", emit_data));

socket.on("contador", (data) => console.log(data));
