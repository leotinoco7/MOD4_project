import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3, 10)
  @ApiProperty({
    description: 'Nome do usuário. Deve conter de 3 a 10 letras',
    example: 'João',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Nickname',
    example: 'joao123',
  })
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @Length(8, 16)
  @ApiProperty({
    description: 'Password',
    example: 'De 8 a 16 letras',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Avatar',
    example: 'url da imagem',
  })
  @IsUrl()
  @IsString()
  image: string;
}
