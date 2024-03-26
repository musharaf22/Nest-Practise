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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const response_interceptor_1 = require("../../utils/interceptors/response.interceptor");
const error_interceptor_1 = require("../../utils/interceptors/error.interceptor");
const Roleguard_1 = require("../../common/guards/Roleguard");
const jwtAuthGuard_1 = require("../../common/guards/jwtAuthGuard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async get() {
        return this.userService.getAllUser();
    }
    async login() {
        console.log("Rendering - - - -");
        return await this.userService.loginUser();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)("/"),
    (0, Roleguard_1.Roles)(["admin"]),
    (0, common_1.UseGuards)(jwtAuthGuard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
__decorate([
    (0, common_1.Get)("/login"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.UseInterceptors)(response_interceptor_1.ResponseInterceptor, error_interceptor_1.ErrorsInterceptor),
    (0, common_1.UseGuards)(Roleguard_1.RolesGuard),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map