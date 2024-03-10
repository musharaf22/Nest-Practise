import { HttpException, Injectable } from '@nestjs/common';
import { GlobalService } from 'src/global/global service';

@Injectable()
export class UserService {
  constructor(private logger: GlobalService) {}

  getAllUser = () => {
    this.logger.logs('User Service has been called');
    throw new HttpException('User not found', 404);
    return {
      success: true,
      message: 'user found',
      data: [],
    };
  };
}
