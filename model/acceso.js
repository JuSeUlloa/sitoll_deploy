"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = __importDefault(require("./usuario"));
let Acceso = class Acceso {
    constructor(codU, nom, cla) {
        this.codUsuario = codU;
        this.nombreAcceso = nom;
        this.claveAcceso = cla;
    }
};
exports.Acceso = Acceso;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_usuario" }),
    __metadata("design:type", Number)
], Acceso.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombre_acceso", length: 250 }),
    __metadata("design:type", String)
], Acceso.prototype, "nombreAcceso", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "clave_acceso", length: 500 }),
    __metadata("design:type", String)
], Acceso.prototype, "claveAcceso", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_1.default, (objUsuario) => objUsuario.acceso, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cod_usuario", referencedColumnName: "codUsuario" }]),
    __metadata("design:type", usuario_1.default)
], Acceso.prototype, "codUsuarioA", void 0);
exports.Acceso = Acceso = __decorate([
    (0, typeorm_1.Entity)("accesos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String])
], Acceso);
