import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { GlobalService } from "src/global/global service";

@Injectable()
export class UserService {
  constructor(
    private logger: GlobalService,
    private jwtService: JwtService
  ) {}
  async loginUser() {
    const payload = {
      id: 1,
      name: "Musharaf Haque",
      email: "musharaf@test.com",
    };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
  getAllUser = () => {
    this.logger.logs("User Service has been called");
    return {
      success: true,
      message: "user found",
      data: [],
    };
  };
}
