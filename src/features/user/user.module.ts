import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [],
  providers: [UserService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
