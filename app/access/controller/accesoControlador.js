"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesoDao_1 = __importDefault(require("../dao/accesoDao"));
class AccesoControlador extends accesoDao_1.default {
    inicioSesion(req, res) {
        let objAcceso = req.body;
        AccesoControlador.sesion(res, objAcceso);
    }
}
const accesoControlador = new AccesoControlador();
exports.default = accesoControlador;
