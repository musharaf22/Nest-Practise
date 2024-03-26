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
      console.log({ token });
      return { message: "Logged In", data: { token }, success: true };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 500);
    }
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
