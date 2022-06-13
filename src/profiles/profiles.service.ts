import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Profile } from './entities/profile.entity';
import { handleError } from 'src/utils/handle-error.util';
import { Prisma } from '@prisma/client';
import { notFoundError } from 'src/utils/not-found.util';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProfileDto, userId: string) {
    const data: Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: userId,
        },
      },
      ...dto,
    };
    return this.prisma.profile.create({ data }).catch(handleError);
  }

  async findAll(userId: string) {
    const list = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        profiles: { select: { id: true, title: true, imageURL: true } },
      },
    });

    if (list.profiles.length == 0) {
      throw new NotFoundException('não existem perfis cadastrados.');
    }
    return list;
  }

  async findOne(profileId: string) {
    const record = await this.prisma.profile.findUnique({
      where: { id: profileId },
      select: {
        title: true,
        imageURL: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    notFoundError(record, profileId);

    return record;
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findOne(id);

    const data: Prisma.ProfileUpdateInput = {
      title: dto.title,
      imageURL: dto.imageURL,
    };

    return this.prisma.profile
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findOne(id);

    await this.prisma.profile.delete({
      where: { id },
    });
    throw new HttpException('Deletado com sucesso.', 204);
  }
}
