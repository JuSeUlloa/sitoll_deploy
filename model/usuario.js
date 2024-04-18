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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const acceso_1 = require("./acceso");
let Usuario = class Usuario {
    /*
       @OneToMany(
          () => TurnosUsuarios,
          (turnosUsuarios) => turnosUsuarios.codUsuario2
      )
      turnosUsuarios: TurnosUsuarios[];
   */
    constructor(cod, nom, ape, ide, rol) {
        this.codUsuario = cod;
        this.nombresUsuario = nom;
        this.apellidosUsuario = ape;
        this.identificacionUsuario = ide;
        this.rolUsuario = rol;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_usuario" }),
    __metadata("design:type", Number)
], Usuario.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "identificacion_usuario", length: 20 }),
    __metadata("design:type", String)
], Usuario.prototype, "identificacionUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombres_usuario", length: 250 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombresUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "apellidos_usuario", length: 250 }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidosUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rol_usuario", length: 200 }),
    __metadata("design:type", String)
], Usuario.prototype, "rolUsuario", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => acceso_1.Acceso, (objAcceso) => objAcceso.codUsuarioA),
    __metadata("design:type", acceso_1.Acceso)
], Usuario.prototype, "acceso", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)("usuarios", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String, String, String])
], Usuario);
exports.default = Usuario;
