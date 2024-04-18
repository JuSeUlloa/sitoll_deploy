"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utilidad {
    static generarNombreAcceso(objUsuario) {
        let nombresUsuario = objUsuario.nombresUsuario.toLowerCase();
        let apellidosUsuario = objUsuario.apellidosUsuario.toLowerCase();
        let cadena = nombresUsuario.split(' ', 1)[0] + '.' + apellidosUsuario.split(' ', 1)[0];
        return cadena;
    }
}
exports.default = Utilidad;
