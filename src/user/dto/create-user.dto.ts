import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateUserDto {
  @Length(3, 10)
  @ApiProperty({
    description: 'Nome do usuário. Deve conter de 3 a 10 letras',
    example: 'João',
  })
  name: string;
}
