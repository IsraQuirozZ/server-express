document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log({ email, password });
  if (email && password) {
    fetch(`http://localhost:8080/api/sessions/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => alert(res.message))
      .catch((err) => console.log(err));
  }
});

document.getElementById("signout").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:8080/api/sessions/signout", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => alert(res.message))
    .catch((err) => console.log(err));
});
