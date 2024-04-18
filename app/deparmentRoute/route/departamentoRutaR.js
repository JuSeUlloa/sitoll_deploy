"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoRutaControlador_1 = __importDefault(require("../controller/departamentoRutaControlador"));
class DepartamentoRutaR {
    constructor() {
        this.apiDepartamentoRuta = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiDepartamentoRuta.post("/add", departamentoRutaControlador_1.default.crearDepartamentoRuta);
        this.apiDepartamentoRuta.get("/list", departamentoRutaControlador_1.default.consultarDepartamentoRuta);
        this.apiDepartamentoRuta.get("/allRoutes/:codDepartamento", departamentoRutaControlador_1.default.consultarRutasPorDepartamento);
        this.apiDepartamentoRuta.get("/allDepartment/:codRoute", departamentoRutaControlador_1.default.consultarDepartamentoRuta);
        this.apiDepartamentoRuta.put("/update", departamentoRutaControlador_1.default.actualizarDepartamentoRuta);
        this.apiDepartamentoRuta.delete("/delete/:codDepaRuta", departamentoRutaControlador_1.default.eliminarDepartamentosPorRuta);
    }
}
const departamentoRutaR = new DepartamentoRutaR();
exports.default = departamentoRutaR.apiDepartamentoRuta;
