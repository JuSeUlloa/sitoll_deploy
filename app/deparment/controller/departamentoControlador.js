"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoDao_1 = __importDefault(require("../dao/departamentoDao"));
class DepartamentoControlador extends departamentoDao_1.default {
    crearDepartamento(req, res) {
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoControlador.crearDepartamento(res, objDepartamento);
    }
    obtenerDepartamentos(req, res) {
        DepartamentoControlador.listarDepartamentos(res);
    }
    actualizarDepartamento(req, res) {
        let objDepartamento;
        objDepartamento = req.body;
        DepartamentoControlador.modificarDepartamento(res, objDepartamento);
    }
    eliminarDepartamento(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            DepartamentoControlador.borrarDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "codigo de departamento no valido" });
        }
    }
}
const departamentoControlador = new DepartamentoControlador();
exports.default = departamentoControlador;
