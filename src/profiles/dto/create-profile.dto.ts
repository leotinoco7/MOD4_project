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

  @ApiProperty({
    description: 'id do usuário',
    example: 'id do usuário',
  })
  @IsUUID()
  userId: string;
}
