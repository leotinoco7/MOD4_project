import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'nome do jogo',
    example: 'Call of Duty',
  })
  name: string;
}
