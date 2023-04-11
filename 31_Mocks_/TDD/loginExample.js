let testPasados = 0;
const logguear = (user, pass) => {
  if (!pass) {
    return "No se ha proporcionado un password";
  } else if (!user) {
    return "No se ha proporcionado un usuario";
  } else if (pass !== "1234") {
    return "Contraseña incorrecta";
  } else if (user !== "pepe") {
    return "Credenciales incorrectas";
  } else {
    return "logueado";
  }
};
//Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
//Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
//Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
//Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
//Si  el usuario y contraseña coinciden, consologuear (“logueado”)

let resultado1 = logguear("pepe", "");
console.log(resultado1);
if (resultado1 === "No se ha proporcionado un password") {
  testPasados++;
  console.log("Test 1: PASADO");
} else
  console.log(
    "Test 1: FALLIDO, se recibio: " + typeof resultTest1 + " se esperaba: null"
  );

//Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)

let resultado2 = logguear("", "1234");
console.log(resultado2);
if (resultado2 === "No se ha proporcionado un usuario") {
  testPasados++;
  console.log("Test 2: PASADO");
} else {
  console.log(
    "Test 2: FALLIDO, se recibio: " +
      typeof resultTest2 +
      " se esperaba: No se ha proporcionado un usuario"
  );
}

//Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)

let resultado3 = logguear("pepe", "12345");
console.log(resultado3);
if (resultado3 === "Contraseña incorrecta") {
  testPasados++;
  console.log("Test 3: PASADO");
} else {
  console.log(
    "Test 3: FALLIDO, se recibio: " +
      typeof resultTest3 +
      " se esperaba: Contraseña incorrecta"
  );
}

//Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)

let resultado4 = logguear("pep", "1234");
console.log(resultado4);
if (resultado4 === "Credenciales incorrectas") {
  testPasados++;
  console.log("Test 4: PASADO");
} else {
  console.log(
    "Test 4: FALLIDO, se recibio: " +
      typeof resultTest4 +
      " se esperaba: Credenciales incorrectas"
  );
}

//Si  el usuario y contraseña coinciden, consologuear (“logueado”)

let resultado5 = logguear("pepe", "1234");
console.log(resultado5);
if (resultado5 === "logueado") {
  testPasados++;
  console.log("Test 5: PASADO");
} else {
  console.log(
    "Test 5: FALLIDO, se recibio: " +
      typeof resultTest5 +
      " se esperaba: logueado"
  );
}
