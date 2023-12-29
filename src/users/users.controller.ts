import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post(`create-user`)
  async createUser(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get(`all-users`)
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
