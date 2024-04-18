"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rutaDao_1 = __importDefault(require("../dao/rutaDao"));
class RutaControlador extends rutaDao_1.default {
    crearRuta(req, res) {
        let objRuta;
        objRuta = req.body;
        RutaControlador.crearRuta(res, objRuta);
    }
    obtenerRutas(req, res) {
        RutaControlador.listarRutas(res);
    }
    actualizarRuta(req, res) {
        let objRuta;
        objRuta = req.body;
        RutaControlador.modificarRuta(res, objRuta);
    }
    eliminarRuta(req, res) {
        let codRuta = Number(req.params.codRuta);
        if (!isNaN(codRuta)) {
            RutaControlador.borrarRuta(res, codRuta);
        }
        else {
            res.status(400).json({ mensaje: "codigo de Ruta no valido" });
        }
    }
}
const rutaControlador = new RutaControlador();
exports.default = rutaControlador;
