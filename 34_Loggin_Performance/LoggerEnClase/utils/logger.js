import winston from "winston";
import * as dotenv from "dotenv";

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;

/*
///Primer logger sin condiciones
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "http",
    }),
    new winston.transports.File({
      filename: "logs/warn.log",
      level: "warn",
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
  ],
});
*/

//Segundo logger con condiciones
let logger;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: "warn",
      }),
      new winston.transports.File({
        filename: "logs/prod.log",
        level: "warn",
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()
        ),
      }),
    ],
  });
} else {
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: "verbose",
      }),
    ],
  });
}

export const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
  next();
};
