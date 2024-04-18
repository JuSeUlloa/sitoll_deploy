"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Seguridad {
    verificarToken(req, res, next) {
        if (!req.headers.authorization) {
            res.status(401).json({ respuesta: "Petición negada por el sistema de Seguridad" });
        }
        else {
            try {
                const token = req.headers.authorization.split(' ')[1];
                const datosUsuario = jsonwebtoken_1.default.verify(token, 'claveSuperSecreta');
                req.body.datosUsuario = datosUsuario;
                next();
            }
            catch (err) {
                res.status(401).json({ respuesta: "Intento de fraude" });
            }
        }
    }
}
const seguridad = new Seguridad();
exports.default = seguridad;
