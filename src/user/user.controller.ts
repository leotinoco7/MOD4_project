import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find')
  @ApiOperation({
    summary: 'Visualizar todos usuarios',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar usuário',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('create')
  @ApiOperation({
    summary: 'Criar usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User[]> {
    return this.userService.create(dto);
  }
}
