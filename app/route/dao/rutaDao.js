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
const ruta_1 = __importDefault(require("../../../model/ruta"));
class RutaDao {
    static crearRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            let RutaRepository = conexionBD_1.default.getRepository(ruta_1.default);
            RutaRepository
                .insert(objRuta).then((respuesta) => {
                res.status(200).json({ mensaje: "Save project", objeto: respuesta.raw });
            })
                .catch((err) => {
                res.status(400).json({ mensaje: "Error Save Route " });
            });
        });
    }
    static listarRutas(res) {
        return __awaiter(this, void 0, void 0, function* () {
            let RutaRepository = conexionBD_1.default.getRepository(ruta_1.default);
            RutaRepository.find()
                .then((respuesta) => {
                const arregloRutas = respuesta;
                res.status(200).json(arregloRutas);
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error find Route " });
            });
        });
    }
    static modificarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            let RutaRepository = conexionBD_1.default.getRepository(ruta_1.default);
            RutaRepository.update({ codRuta: objRuta.codRuta }, objRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta actualizado", nuevo: objRuta });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error Update Route " });
            });
        });
    }
    static borrarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            let RutaRepository = conexionBD_1.default.getRepository(ruta_1.default);
            RutaRepository.delete({ codRuta: codRuta })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta eliminado", respuesta: respuesta.affected });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ mensaje: "Error Delete Route " });
            });
        });
    }
}
exports.default = RutaDao;
