"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registrarControlador_1 = __importDefault(require("../controller/registrarControlador"));
class RegistoRuta {
    constructor() {
        this.apiRutaRegistro = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaRegistro.post("/user", registrarControlador_1.default.registroUsuario);
    }
}
const registroRuta = new RegistoRuta();
exports.default = registroRuta.apiRutaRegistro;
