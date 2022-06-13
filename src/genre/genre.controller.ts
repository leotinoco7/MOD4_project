import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserAdmin } from 'src/auth/isadmin-user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('genre')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um gênero',
  })
  create(@UserAdmin() user: User, @Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Buscar todos os gêneros',
  })
  findAll(@UserAdmin() user: User) {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Procurar por id',
  })
  findOne(@UserAdmin() user: User, @Param('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update por ID',
  })
  update(
    @UserAdmin() user: User,
    @Param('id') id: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return this.genreService.update(id, updateGenreDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete por ID',
  })
  remove(@UserAdmin() user: User, @Param('id') id: string) {
    return this.genreService.delete(id);
  }
}
