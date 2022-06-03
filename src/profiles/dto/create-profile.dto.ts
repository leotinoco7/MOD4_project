import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, Length } from 'class-validator';

export class CreateProfileDto {
  @Length(3, 10)
  @ApiProperty({
    description: 'Nome do perfil. Deve conter de 3 a 10 letras',
    example: 'Perfil1',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Avatar',
    example: 'url da imagem',
  })
  @IsUrl()
  @IsString()
  imageURL: string;
}
