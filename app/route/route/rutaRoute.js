"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutaControlador_1 = __importDefault(require("../controller/rutaControlador"));
class RutaRoute {
    constructor() {
        this.apiRuta = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRuta.post("/add", rutaControlador_1.default.crearRuta);
        this.apiRuta.get("/list", rutaControlador_1.default.obtenerRutas);
        this.apiRuta.put("/update", rutaControlador_1.default.actualizarRuta);
        this.apiRuta.delete("/delete/:codRuta", rutaControlador_1.default.eliminarRuta);
    }
}
const rutaRoute = new RutaRoute();
exports.default = rutaRoute.apiRuta;
