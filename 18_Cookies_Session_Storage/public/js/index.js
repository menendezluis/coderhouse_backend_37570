const setCookie = document.getElementById("createCookies");
const getCookie = document.getElementById("getcookie");

setCookie.addEventListener("click", () => {
  const first_name = document.getElementById("first_name");
  const email = document.getElementById("email");

  fetch("/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: first_name.value,
      email: email.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((error) => {
      console.log(error);
      return;
    });
});

const getCookies = async () => {
  try {
    const response = await fetch("/page/getCookie");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
getCookie.addEventListener("click", () => {
  getCookies().then((data) => {
    console.log(data);
    return;
  });
});
