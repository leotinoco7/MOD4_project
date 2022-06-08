import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProfileDto } from './dto/update-profile.dto';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar novo perfil de usuário.',
  })
  create(@Body() dto: CreateProfileDto) {
    return this.profilesService.create(dto);
  }

  @Get('find')
  @ApiOperation({
    summary: 'Listar todos os usuários',
  })
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':profileId')
  @ApiOperation({
    summary: 'Visualizar um perfil pelo ID.',
  })
  findOne(@Param('profileId') id: string) {
    return this.profilesService.findOne(id);
  }

  @Patch(':profileId')
  @ApiOperation({
    summary: 'editar um perfil',
  })
  update(@Param('profileId') id: string, @Body() dto: UpdateProfileDto) {
    return this.profilesService.update(id, dto);
  }

  @Delete(':profileId')
  @ApiOperation({
    summary: 'Deletar um perfil pelo ID.',
  })
  delete(@Param('profileId') id: string) {
    return this.profilesService.delete(id);
  }
}
