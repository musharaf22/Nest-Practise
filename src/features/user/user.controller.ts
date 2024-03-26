import { Controller, Get, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseInterceptor } from "src/utils/interceptors/response.interceptor";
import { ErrorsInterceptor } from "src/utils/interceptors/error.interceptor";
import { Roles, RolesGuard } from "src/common/guards/Roleguard";
import { JwtAuthGuard } from "src/common/guards/jwtAuthGuard";

@UseInterceptors(ResponseInterceptor, ErrorsInterceptor)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  @Roles(["admin"])
  async get() {
    return this.userService.getAllUser();
  }
}
