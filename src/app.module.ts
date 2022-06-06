import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { GamesModule } from './games/games.module';
import { GenreModule } from './genre/genre.module';
import { ProfilesModule } from './profiles/profiles.module';
import { FavoritegamesModule } from './favoritegames/favoritegames.module';

@Module({
  imports: [UserModule, PrismaModule, GamesModule, GenreModule, ProfilesModule, FavoritegamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
