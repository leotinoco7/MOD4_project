import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { GameService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserAdmin } from 'src/auth/isadmin-user.decorator';
import { User } from '@prisma/client';

@ApiTags('games')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GameService) {}

  @Post()
  @ApiOperation({
    summary: 'adicionar um jogo',
  })
  create(@UserAdmin() user: User, @Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  @ApiOperation({
    summary: 'procurar todos os jogos',
  })
  findAll(@UserAdmin() user: User) {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'procurar por id',
  })
  findOne(@UserAdmin() user: User, @Param('id') id: string) {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'update por id',
  })
  update(
    @UserAdmin() user: User,
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    return this.gamesService.update(id, updateGameDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar por ID',
  })
  remove(@UserAdmin() user: User, @Param('id') id: string) {
    return this.gamesService.delete(id);
  }
}
