import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({
    description: 'Título do Perfil',
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

  @IsUUID()
  @ApiProperty({
    description: 'userID do perfil',
    example: 'a912389asd89123',
  })
  userId: string;
}
