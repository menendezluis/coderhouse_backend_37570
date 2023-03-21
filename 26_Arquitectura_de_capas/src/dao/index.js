import memoryToyDao from "./memory/toys.dao.js";
import mongoToyDao from "./mongo/toys.dao.js";
import memoryUserDao from "./memory/users.dao.js";
import mongoUserDao from "./mongo/users.dao.js";
import { PERSISTENCE } from "../config/config.js";

const MemoryToyDao = new memoryToyDao();
const MongoToyDao = new mongoToyDao();
const MemoryUserDao = new memoryUserDao();
const MongoUserDao = new mongoUserDao();

export const TOYSDAO = PERSISTENCE === "MEMORY" ? MemoryToyDao : MongoToyDao;
export const USERSDAO = PERSISTENCE === "MEMORY" ? MemoryUserDao : MongoUserDao;
