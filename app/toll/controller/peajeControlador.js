"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peajeDao_1 = __importDefault(require("../dao/peajeDao"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
const nanoid_1 = require("nanoid");
const administrarImagen_1 = __importDefault(require("../../../config/utilities/administrarImagen"));
class PeajeControlador extends peajeDao_1.default {
    crearPeaje(req, res) {
        let objPeaje = req.body;
        let tipoImagen = objPeaje.fotoPublicaPeaje.split('.')[1];
        let nombrePrivadoFoto = 'IMG_' + (0, nanoid_1.nanoid)(10) + '.' + tipoImagen;
        objPeaje.fotoPrivadaPeaje = nombrePrivadoFoto;
        const rutaImagenSistema = var_imagenes_1.default.rutaFotosSistema;
        administrarImagen_1.default.crearImagen(nombrePrivadoFoto, objPeaje.base64Peaje, rutaImagenSistema);
        PeajeControlador.crearPeaje(res, objPeaje);
    }
    obtenerPeajes(req, res) {
        PeajeControlador.listarPeajes(res);
    }
    actualizarPeaje(req, res) {
        delete req.body.datosUsuario;
        let objPeaje = req.body;
        let tipoImagen = objPeaje.fotoPublicaPeaje.split('.')[1];
        let nombrePrivadoFoto = 'IMG_' + (0, nanoid_1.nanoid)(10) + '.' + tipoImagen;
        objPeaje.fotoPrivadaPeaje = nombrePrivadoFoto;
        const rutaImagenSistema = var_imagenes_1.default.rutaFotosSistema;
        administrarImagen_1.default.crearImagen(nombrePrivadoFoto, objPeaje.base64Peaje, rutaImagenSistema);
        delete objPeaje.base64Peaje;
        PeajeControlador.modificarPeaje(res, objPeaje);
    }
    eliminarPeaje(req, res) {
        let codPeaje = Number(req.params.codPeaje);
        if (!isNaN(codPeaje)) {
            PeajeControlador.borrarPeaje(res, codPeaje);
        }
        else {
            res.status(400).json({ mensaje: "codigo de Peaje no valido" });
        }
    }
}
const peajeControlador = new PeajeControlador();
exports.default = peajeControlador;
