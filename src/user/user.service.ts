import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    const data: Partial<User> = { ...updateUserDto };

    return this.prisma.user
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async remove(id: string) {
    await this.findById(id);

    await this.prisma.user.delete({ where: { id } });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };

    return this.prisma.user.create({ data }).catch(handleError);
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado.`);
    }
    return record;
  }
}
