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
const departamentoRuta_1 = __importDefault(require("../../../model/departamentoRuta"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class DepartamentoRutaDao {
    static crear(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.insert(objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta departamento asignada correctamente" });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al agregar" });
            });
        });
    }
    static consultar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.find()
                .then((respuesta) => {
                res.status(200).json(respuesta);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al agregar" });
            });
        });
    }
    static obtenerPorDepartamento(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.findBy({ codDepartamento: codDepartamento })
                .then((respuesta) => {
                res.status(200).json(respuesta[0]);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar las rutas" });
            });
        });
    }
    static obtenerPorRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.findBy({ codDepartamento: codRuta })
                .then((respuesta) => {
                res.status(200).json(respuesta[0]);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "fallo al consultar los departamentos" });
            });
        });
    }
    static actualizarPorDepartamento(res, objDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.update({ codDepartamentoRuta: objDepaRuta.codDepartamentoRuta }, objDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento ruta Actualizado" });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al  Actualizar el deparatamento ruta" });
            });
        });
    }
    static eliminarDepartamentoRuta(res, codDepartamentoRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.delete({ codDepartamentoRuta: codDepartamentoRuta })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento ruta elminado", respuesta: respuesta.affected });
            }).catch(() => {
                res.status(400).json({ mensaje: " Fallo al eliminar el Departamento ruta" });
            });
        });
    }
}
DepartamentoRutaDao.departamentoRutaRepository = conexionBD_1.default.getRepository(departamentoRuta_1.default);
exports.default = DepartamentoRutaDao;
