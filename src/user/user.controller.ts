import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find')
  findAll() {
    return this.userService.findAll();
  }

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
