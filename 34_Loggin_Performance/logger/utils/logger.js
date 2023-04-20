import winston from "winston";

/*const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "http",
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "warn",
    }),
  ],
});*/

const customLevelsOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    fatal: "red",
    error: "orange",
    warning: "yellow",
    info: "green",
    debug: "blue",
  },
};
/*import winston from "winston";

let logger;

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

export const logError = (error) => {
  const errorLogger = winston.createLogger({
    transports: [
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
      }),
    ],
  });
  errorLogger.error(error);
};
*/
const logger = winston.createLogger({
  levels: customLevelsOptions.levels,
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize({
          all: true,
          colors: {
            fatal: "red",
            error: "yellow",
            warning: "magenta",
            info: "green",
            debug: "cyan",
          },
        }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: winston.format.simple(),
    }),
  ],
});

export const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.fatal(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
  req.logger.error(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
  req.logger.warning(
    `${req.method} en ${req.url} - ${new Date().toISOString()}`
  );
  req.logger.info(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
  req.logger.debug(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
  next();
};
