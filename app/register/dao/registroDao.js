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
const usuario_1 = __importDefault(require("../../../model/usuario"));
const acceso_1 = require("../../../model/acceso");
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_sql_1 = require("../repository/usuario_sql");
const generarTokenControlador_1 = __importDefault(require("../../shared/controller/generarTokenControlador"));
class RegistroDao {
    static nuevoUsuario(res, objUsuario, objAcceso) {
        return __awaiter(this, void 0, void 0, function* () {
            const accesoRepository = conexionBD_1.default.getRepository(acceso_1.Acceso);
            const usuairoRepository = conexionBD_1.default.getRepository(usuario_1.default);
            let accion = 1, codUsuario = 0;
            const usuarioAcceso = yield accesoRepository.findBy({ nombreAcceso: objAcceso.nombreAcceso });
            if (usuarioAcceso.length == 0) {
                codUsuario = ((yield usuairoRepository.insert(objUsuario)).identifiers[0].codUsuario);
                const cifrada = bcryptjs_1.default.hashSync(objAcceso.claveAcceso);
                objAcceso.codUsuario = codUsuario;
                objAcceso.claveAcceso = cifrada;
                yield accesoRepository.insert(objAcceso);
                accion = 2;
            }
            console.log(codUsuario);
            usuairoRepository.query(usuario_sql_1.SQL_REGISTRO.DATOS, [codUsuario]).then((respuesta) => {
                console.log(respuesta);
                switch (accion) {
                    case 1:
                        res.status(400).json({ mensaje: "nombre de Acceso ya existe" });
                        break;
                    case 2:
                        const token = generarTokenControlador_1.default.procesarRespuesta(respuesta[0]);
                        res.status(200).json({ tokenApp: token });
                        break;
                }
            }).catch((err) => {
                res.status(400).json({ mensaje: "Error to Register User" });
            });
        });
    }
}
exports.default = RegistroDao;
