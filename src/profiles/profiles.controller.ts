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
import { Profile } from './entities/profile.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly userService: ProfilesService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Criar usuário',
  })
  create(@Body() dto: CreateProfileDto): Promise<Profile> {
    return this.userService.create(dto);
  }

  @Get('find')
  @ApiOperation({
    summary: 'Visualizar todos usuarios',
  })
  findAll(): Promise<Profile[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar usuário',
  })
  findOne(@Param('id') id: string): Promise<Profile> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update por ID',
  })
  update(@Param('id') id: string, @Body() updateProfilesDto: UpdateProfileDto) {
    return this.userService.update(id, updateProfilesDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete por ID',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
