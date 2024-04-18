"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const deasync_1 = __importDefault(require("deasync"));
const var_imagenes_1 = __importDefault(require("../../config/domain/var_imagenes"));
class AdministrarImagen {
    static crearImagen(nombrePrivado, base64, rutaAlmacenarImagen) {
        let decodificacion = base64.replace(/^data:image\/\w+;base64,/, "");
        fs_1.default.readdir(rutaAlmacenarImagen, (err) => {
            if (err) {
                fs_1.default.mkdirSync(rutaAlmacenarImagen, { recursive: true });
            }
            fs_1.default.writeFile(rutaAlmacenarImagen + nombrePrivado, decodificacion, { encoding: "base64" }, function () { });
        });
    }
    static borrarImagen(rutaImagenBorrar) {
        fs_1.default.unlink(rutaImagenBorrar, function (error) {
            if (error) {
                console.log("Fallo al borrar la imagen");
            }
        });
    }
    static crearMiniatura(rutaImagenPrivada, imagenMiniatura, tamano) {
        let esperar = true;
        const dataSharp = (0, sharp_1.default)(rutaImagenPrivada).resize({ width: tamano })
            .toFile(imagenMiniatura, (err) => {
            if (err) {
            }
            else {
                esperar = false;
            }
        });
        while (esperar) {
            deasync_1.default.sleep(50);
        }
        return dataSharp;
    }
    static cargarImagen(fotoPrivada, rutaImagenPrivada, tamano) {
        let base64 = '';
        if (fs_1.default.existsSync(rutaImagenPrivada)) {
            let imagenMiniatura = var_imagenes_1.default.rutaFotosTemporal + fotoPrivada;
            AdministrarImagen.crearMiniatura(rutaImagenPrivada, imagenMiniatura, tamano);
            base64 = fs_1.default.readFileSync(imagenMiniatura, 'base64');
            fs_1.default.unlinkSync(imagenMiniatura);
        }
        else {
            let rutaImagenError = var_imagenes_1.default.fotoError;
            base64 = fs_1.default.readFileSync(rutaImagenError, 'base64');
        }
        return base64;
    }
}
exports.default = AdministrarImagen;
