"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoControlador_1 = __importDefault(require("../controller/departamentoControlador"));
class DepartamentoRuta {
    constructor() {
        this.apiRutaDepartamento = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaDepartamento.post("/add", departamentoControlador_1.default.crearDepartamento);
        this.apiRutaDepartamento.get("/list", departamentoControlador_1.default.obtenerDepartamentos);
        this.apiRutaDepartamento.put("/update", departamentoControlador_1.default.actualizarDepartamento);
        this.apiRutaDepartamento.delete("/delete/:codDepartamento", departamentoControlador_1.default.eliminarDepartamento);
    }
}
const departamentoRuta = new DepartamentoRuta();
exports.default = departamentoRuta.apiRutaDepartamento;
