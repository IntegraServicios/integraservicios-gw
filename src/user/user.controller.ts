import { Body, Controller, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put()
  createUser(@Body() data) {
    return this.userService.createUser(
      data.name,
      data.lastName,
      data.email,
      data.password,
      data.role,
    );
  }
}
