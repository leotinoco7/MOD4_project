import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { GamesModule } from './games/games.module';
import { GenreModule } from './genre/genre.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GamesprofileModule } from './gamesprofile/gamesprofile.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    GamesModule,
    GenreModule,
    ProfilesModule,
    GamesprofileModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
