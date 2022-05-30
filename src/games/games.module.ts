import { Module } from '@nestjs/common';
import { GameService } from './games.service';
import { GamesController } from './games.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GamesController],
  providers: [GameService],
})
export class GamesModule {}
