import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Prisma } from '@prisma/client';
import { Game } from './entities/game.entity';
import { notFoundError } from 'src/utils/not-found.util';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        createMany: {
          data: dto.genres.map((genreID) => ({ genreId: genreID })),
        },
      },
    };
    return await this.prisma.game
      .create({
        data,
        include: { genres: { select: { genre: { select: { name: true } } } } },
      })
      .catch(handleError);
  }

  async findAll(): Promise<Game[]> {
    const list = await this.prisma.game.findMany();

    if (list.length === 0) {
      throw new NotFoundException('Não existem gêneros cadastrados.');
    }
    return list;
  }

  async findOne(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    notFoundError(record, id);

    return record;
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findOne(id);

    const data = { ...dto };

    return this.prisma.game
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findOne(id);

    await this.prisma.game.delete({
      where: { id },
    });
    throw new HttpException('Deletado com sucesso.', 204);
  }
}
