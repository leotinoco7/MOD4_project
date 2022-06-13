import { Module } from '@nestjs/common';
import { GamesprofileService } from './gamesprofile.service';
import { GamesprofileController } from './gamesprofile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [GamesprofileController],
  providers: [GamesprofileService],
})
export class GamesprofileModule {}
