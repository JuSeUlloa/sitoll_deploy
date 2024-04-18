"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoRutaDao_1 = __importDefault(require("../dao/departamentoRutaDao"));
class DepartamentoRutaControlador extends departamentoRutaDao_1.default {
    crearDepartamentoRuta(req, res) {
        const objDepaRuta = req.body;
        departamentoRutaDao_1.default.crear(res, objDepaRuta);
    }
    consultarDepartamentoRuta(req, res) {
        departamentoRutaDao_1.default.consultar(res);
    }
    consultarRutasPorDepartamento(req, res) {
        let codDepartamento = Number(req.params.codDepartamento);
        if (!isNaN(codDepartamento)) {
            departamentoRutaDao_1.default.obtenerPorDepartamento(res, codDepartamento);
        }
        else {
            res.status(400).json({ respuesta: "Codigo de departamento no valido" });
        }
    }
    consultarDepartamentosPorRuta(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            departamentoRutaDao_1.default.obtenerPorDepartamento(res, codRuta);
        }
        else {
            res.status(400).json({ respuesta: "Codigo de ruta no valido" });
        }
    }
    actualizarDepartamentoRuta(req, res) {
        const objDepaRuta = req.body;
        departamentoRutaDao_1.default.actualizarPorDepartamento(res, objDepaRuta);
    }
    eliminarDepartamentosPorRuta(req, res) {
        let codDepaRuta = Number(req.params.codDepaRuta);
        if (!isNaN(codDepaRuta)) {
            departamentoRutaDao_1.default.eliminarDepartamentoRuta(res, codDepaRuta);
        }
        else {
            res.status(400).json({ respuesta: "Codigo de ruta no valido" });
        }
    }
}
const departamentoRutaControlador = new DepartamentoRutaControlador();
exports.default = departamentoRutaControlador;
