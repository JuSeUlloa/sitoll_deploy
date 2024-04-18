"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerarTokenControlador {
    static procesarRespuesta(registro) {
        const token = jsonwebtoken_1.default.sign({
            id: registro.cod_usuario,
            correoAcceso: registro.nombre_acceso,
            nombresUsuario: registro.nombres_usuario,
            apellidosUsuario: registro.apellidos_usuario,
        }, "claveSuperSecreta", { expiresIn: "14h" });
        return token;
    }
}
exports.default = GenerarTokenControlador;
