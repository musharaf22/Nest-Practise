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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const global_service_1 = require("../../global/global service");
let UserService = class UserService {
    constructor(logger, jwtService) {
        this.logger = logger;
        this.jwtService = jwtService;
        this.getAllUser = () => {
            this.logger.logs("User Service has been called");
            return {
                success: true,
                message: "user found",
                data: [],
            };
        };
    }
    async loginUser() {
        try {
            const payload = {
                id: 1,
                name: "Musharaf Haque",
                email: "musharaf@test.com",
            };
            console.log({ first: payload });
            const token = await this.jwtService.signAsync(payload, {
                secret: "secretkey",
                expiresIn: "365d",
            });
            return { message: "Logged In", data: { token }, success: true };
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error.message, 500);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [global_service_1.GlobalService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map