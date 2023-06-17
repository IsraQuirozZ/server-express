document.getElementById("register").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  if (!email.value) {
    console.log("no");
  } else {
    fetch(`http://localhost:8080/api/cookies/set/${email.value}`)
      .then((res) => res.json())
      .then((res) => alert(res.message))
      .catch((err) => console.log(err));
  }
});

document.getElementById("cookie").addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`http://localhost:8080/api/cookies/get`)
    .then((res) => res.json())
    .then((res) => alert(res.cookies.user))
    .catch((err) => console.log(err));
});
