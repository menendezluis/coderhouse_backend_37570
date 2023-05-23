import jwt from "jsonwebtoken";

const PRIVATE_KEY = "CoderKeyQueFuncionaComoUnSecret";

const generateToken = (user) => {
  const expirationTime = new Date();
  user.expirationTime = expirationTime;
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: "60000" });
  return token;
};

const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({
      error: "Not authenticated",
    });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
    if (error)
      return res.status(403).send({
        error: "Not authorized",
      });
    req.user = credentials.user;
    next();
  });
};

export { generateToken, authToken };
