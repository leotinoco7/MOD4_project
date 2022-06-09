import { Module } from '@nestjs/common';
import { GamesprofileService } from './gamesprofile.service';
import { GamesprofileController } from './gamesprofile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GamesprofileController],
  providers: [GamesprofileService],
})
export class GamesprofileModule {}
