import { PrismaService } from '../prisma/prisma.service';
import { notFoundError } from '../utils/not-found.util';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesprofileService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(profileId: string) {
    const record = await this.prisma.gamesProfile.findUnique({
      where: { id: profileId },
      select: {
        profileId: true,
      },
    });
    notFoundError(record, profileId);

    return record;
  }
}
