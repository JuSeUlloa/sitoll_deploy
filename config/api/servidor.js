"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const registroRuta_1 = __importDefault(require("../../app/register/route/registroRuta"));
const accesoRuta_1 = __importDefault(require("../../app/access/route/accesoRuta"));
const rutaRoute_1 = __importDefault(require("../../app/route/route/rutaRoute"));
const departamentoRuta_1 = __importDefault(require("../../app/deparment/route/departamentoRuta"));
const departamentoRutaR_1 = __importDefault(require("../../app/deparmentRoute/route/departamentoRutaR"));
const peajeRuta_1 = __importDefault(require("../../app/toll/route/peajeRuta"));
const seguridad_1 = __importDefault(require("../../middleware/seguridad"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.cargarRutas();
    }
    cargarConfiguracion() {
        this.app.set("PORT", 3300);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    cargarRutas() {
        this.app.use("/api/public/register", registroRuta_1.default);
        this.app.use("/api/public/acces", accesoRuta_1.default);
        this.app.use("/api/private/department", seguridad_1.default.verificarToken, departamentoRuta_1.default);
        this.app.use("/api/private/departmentRoute", seguridad_1.default.verificarToken, departamentoRutaR_1.default);
        this.app.use("/api/private/toll", seguridad_1.default.verificarToken, peajeRuta_1.default);
        this.app.use("/api/private/route", seguridad_1.default.verificarToken, rutaRoute_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("servidor funcionando en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
