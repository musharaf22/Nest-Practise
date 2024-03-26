import { Controller, Get, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseInterceptor } from "src/utils/interceptors/response.interceptor";
import { ErrorsInterceptor } from "src/utils/interceptors/error.interceptor";
import { Roles, RolesGuard } from "src/common/guards/Roleguard";

@UseInterceptors(ResponseInterceptor, ErrorsInterceptor)
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  @Roles(["admin"])
  @UseGuards(RolesGuard)
  async get() {
    return this.userService.getAllUser();
  }
}
