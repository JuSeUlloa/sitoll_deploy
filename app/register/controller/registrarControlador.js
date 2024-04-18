"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registroDao_1 = __importDefault(require("../dao/registroDao"));
const ultidad_1 = __importDefault(require("../../../config/utilities/ultidad"));
const nanoid_1 = require("nanoid");
class RegistroControlador extends registroDao_1.default {
    registroUsuario(req, res) {
        let objUsuario;
        let objAcceso;
        objAcceso = req.body;
        objUsuario = req.body;
        objUsuario.identificacionUsuario = 'DOC_' + (0, nanoid_1.nanoid)(10);
        objUsuario.rolUsuario = 'Empleado';
        objAcceso.nombreAcceso = ultidad_1.default.generarNombreAcceso(objUsuario);
        /* res.status(200).json(objAcceso) */
        RegistroControlador.nuevoUsuario(res, objUsuario, objAcceso);
    }
}
const registroControlador = new RegistroControlador();
exports.default = registroControlador;
