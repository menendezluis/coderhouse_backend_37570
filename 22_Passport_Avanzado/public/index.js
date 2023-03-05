let myCookie = document.cookie;
console.log(myCookie.split("=")[1]);
const getMyData = async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    //con local storage
    //localStorage.setItem("authTotken", data.token);
    //con cookie
  } catch (error) {
    console.log(error);
  }
};

const myElement = document.getElementById("enviar");
myElement.addEventListener("click", () => {
  getMyData();
});
