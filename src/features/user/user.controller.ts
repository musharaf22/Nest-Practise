import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseInterceptor } from 'src/utils/interceptors/response.interceptor';
import { ErrorsInterceptor } from 'src/utils/interceptors/error.interceptor';

@UseInterceptors(ResponseInterceptor, ErrorsInterceptor)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  async get() {
    return this.userService.getAllUser();
  }
}
