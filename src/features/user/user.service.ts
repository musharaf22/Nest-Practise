import { HttpException, Injectable } from "@nestjs/common";
import { GlobalService } from "src/global/global service";

@Injectable()
export class UserService {
  constructor(private logger: GlobalService) {}

  getAllUser = () => {
    this.logger.logs("User Service has been called");
    return {
      success: true,
      message: "user found",
      data: [],
    };
  };
}
