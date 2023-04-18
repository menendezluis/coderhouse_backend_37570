import EErros from "../../EErrors.js";
export default (error, req, res, next) => {
  console.log(error.error);
  switch (error.code) {
    case EErros.INVALID_TYPES_ERROR:
      res.send({
        status: "error",
        error: error.name,
      });
      break;
    default:
      res.send({
        status: "error",
        error: "unhandled error",
      });
      break;
  }
};
