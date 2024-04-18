"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const departamento_1 = __importDefault(require("../../model/departamento"));
const ruta_1 = __importDefault(require("../../model/ruta"));
const departamentoRuta_1 = __importDefault(require("../../model/departamentoRuta"));
const acceso_1 = require("../../model/acceso");
const usuario_1 = __importDefault(require("../../model/usuario"));
const peaje_1 = __importDefault(require("../../model/peaje"));
dotenv_1.default.config({ path: ".env" });
const database = String(process.env.DATABASE);
const user = String(process.env.USER_DB);
const password = String(process.env.PASSWORD);
const host = String(process.env.HOST);
const port = Number(process.env.PORT);
const SnakeNamingStrategy = require('typeorm-naming-strategies')
    .SnakeNamingStrategy;
const poolConection = new typeorm_1.DataSource({
    type: "postgres",
    host: host,
    port: port,
    username: user,
    password: password,
    database: database,
    synchronize: true,
    entities: [departamento_1.default, ruta_1.default, departamentoRuta_1.default, acceso_1.Acceso, usuario_1.default, peaje_1.default],
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    ssl: {
        rejectUnauthorized: false,
    }
});
poolConection.initialize()
    .then((conn) => {
    console.log("Conexion establecida con " + database);
}).catch((err) => {
    console.log(err);
});
exports.default = poolConection;
