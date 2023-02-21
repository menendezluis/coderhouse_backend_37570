const elementExists = (id) => document.getElementById(id) !== null;
elementExists("login") &&
  document.getElementById("login").addEventListener("click", (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          window.location.href = "/profile";
        } else {
          alert("usuario no encontrado");
        }
      })
      .catch((error) => alert("usuario no encontrado"))
      .catch((error) => alert("usuario no encontrado"));
  });

elementExists("signup") &&
  document.getElementById("signup").addEventListener("click", (e) => {
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        age,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
