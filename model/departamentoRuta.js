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
const typeorm_1 = require("typeorm");
const departamento_1 = __importDefault(require("./departamento"));
const ruta_1 = __importDefault(require("./ruta"));
let DepartamentoRuta = class DepartamentoRuta {
    constructor(cod, fec, codDe, codRu) {
        this.codDepartamentoRuta = cod;
        this.fechaCreacionDepartamentoRuta = fec;
        this.codDepartamento = codDe;
        this.codRuta = codRu;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_departamento_ruta" }),
    __metadata("design:type", Number)
], DepartamentoRuta.prototype, "codDepartamentoRuta", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cod_departamento" }),
    __metadata("design:type", Number)
], DepartamentoRuta.prototype, "codDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cod_ruta" }),
    __metadata("design:type", Number)
], DepartamentoRuta.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fecha_creacion_departamento_rut" }),
    __metadata("design:type", Date)
], DepartamentoRuta.prototype, "fechaCreacionDepartamentoRuta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departamento_1.default, (objDepartamento) => objDepartamento.departamentoRuta, { onDelete: "RESTRICT", onUpdate: "RESTRICT" }),
    (0, typeorm_1.JoinColumn)([
        { name: "cod_departamento", referencedColumnName: "codDepartamento" },
    ]),
    __metadata("design:type", departamento_1.default)
], DepartamentoRuta.prototype, "codDepartamentoR", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ruta_1.default, (objRuta) => objRuta.departamentoRuta, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cod_ruta", referencedColumnName: "codRuta" }]),
    __metadata("design:type", ruta_1.default)
], DepartamentoRuta.prototype, "codRutaD", void 0);
DepartamentoRuta = __decorate([
    (0, typeorm_1.Entity)("departamentos_rutas", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Date, Number, Number])
], DepartamentoRuta);
exports.default = DepartamentoRuta;
