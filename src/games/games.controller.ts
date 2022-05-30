import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GameService) {}

  @Post()
  @ApiOperation({
    summary: 'adicionar um jogo',
  })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  @ApiOperation({
    summary: 'procurar todos os jogos',
  })
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'procurar por id',
  })
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'update por id',
  })
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(id, updateGameDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar por ID',
  })
  remove(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }
}
