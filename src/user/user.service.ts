import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
id: id,
    }});
  }

  create(dto: CreateUserDto): Promise<User[]> {
    const data: User = { ...dto };

    return this.prisma.user.create({ data });
  }
}
