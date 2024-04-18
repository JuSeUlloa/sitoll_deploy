"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const peaje_1 = __importDefault(require("../../../model/peaje"));
const administrarImagen_1 = __importDefault(require("../../../config/utilities/administrarImagen"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
class PeajeDao {
    static crearPeaje(res, objPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            this.peajeRepository.insert(objPeaje).then((respuesta) => {
                res.status(200).json({ mensaje: "Save project", objeto: respuesta.raw });
            })
                .catch((err) => {
                res.status(400).json({ mensaje: "Error Save Toll " });
            });
        });
    }
    static listarPeajes(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rutaImagenPrivada = var_imagenes_1.default.rutaFotosSistema;
            this.peajeRepository.find()
                .then((respuesta) => {
                const arregloPeajes = respuesta;
                arregloPeajes.map((objPeaje) => {
                    let fotoPrivada = objPeaje.fotoPrivadaPeaje;
                    const base64 = administrarImagen_1.default.cargarImagen(fotoPrivada, rutaImagenPrivada + fotoPrivada, 500);
                    objPeaje.base64Peaje = base64;
                });
                res.status(200).json(arregloPeajes);
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error find Toll " });
            });
        });
    }
    static modificarPeaje(res, objPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.peajeRepository.findOne({ where: { codPeaje: objPeaje.codPeaje } });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotosSistema + encontrado.fotoPrivadaPeaje;
                administrarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.peajeRepository.update({ codPeaje: objPeaje.codPeaje }, objPeaje)
                    .then((respuesta) => {
                    res.status(200).json({ mensaje: "Peaje actualizado", nuevo: objPeaje });
                })
                    .catch((err) => {
                    console.log(err);
                    res.status(400).json({ mensaje: "Error Update Toll " });
                });
            }
            else {
                res.status(400).json({ mensaje: "Don´t find Toll " });
            }
        });
    }
    static borrarPeaje(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.peajeRepository.findOne({ where: { codPeaje: codPeaje } });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotosSistema + encontrado.fotoPrivadaPeaje;
                administrarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.peajeRepository.delete({ codPeaje: codPeaje })
                    .then((respuesta) => {
                    res.status(200).json({ mensaje: "Peaje eliminado", respuesta: respuesta.affected });
                })
                    .catch((err) => {
                    console.log(err);
                    res.status(400).json({ mensaje: "Error Delete Toll " });
                });
            }
            else {
                res.status(400).json({ mensaje: "Don´t find Toll " });
            }
        });
    }
}
PeajeDao.peajeRepository = conexionBD_1.default.getRepository(peaje_1.default);
exports.default = PeajeDao;
