import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = { user: {
      connect {
        id: dto.userId,
      }
    } };

    return this.prisma.profile.create({ data }).catch(handleError);
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    await this.findById(id);

    const data = { ...updateProfileDto };

    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.profile.delete({ where: { id } });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }
}
