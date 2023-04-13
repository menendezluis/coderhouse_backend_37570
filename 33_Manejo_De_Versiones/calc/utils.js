import * as MATH from "math37570";

export const operation = (a, b, operation) => {
  console.log("desde operation", operation, a, b);
  switch (operation) {
    case "suma":
      return `La suma es: ${MATH.suma(a, b)}`;
    case "resta":
      return `La resta es: ${MATH.resta(a, b)}`;
    case "multiplicacion":
      return `La multiplicación es: ${MATH.multiplicacion(a, b)}`;
    case "division":
      return `La división es: ${MATH.division(a, b)}`;
    case "potencia":
      return `La potencia es: ${MATH.potencia(a, b)}`;
    case "raiz":
      return `La raíz es: ${MATH.raiz(a)}`;
    case "multiplicacionporpi":
      return `La multiplicación por PI es: ${MATH.multiplicacionPorPI(a)}`;
    default:
      return "Operación no válida";
  }
};
