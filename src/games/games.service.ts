import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    await this.findById(id);

    const data: Partial<Game> = { ...updateGameDto };

    return this.prisma.game
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.game.delete({ where: { id } });
  }

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findOne(id: string): Promise<Game> {
    return this.findById(id);
  }

  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = {
      ...dto,
    };

    return this.prisma.game.create({ data }).catch(handleError);
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }
}
