const elementExists = (id) => document.getElementById(id) !== null;
elementExists("login") &&
  document.getElementById("login").addEventListener("click", (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
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

elementExists("forgotPassword") &&
  document
    .getElementById("forgotPassword")
    .addEventListener("click", function () {
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const repeatPassword = document.getElementById("repeatPassword").value;

      fetch("/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, repeatPassword }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    });
