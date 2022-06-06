import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Título do jogo',
    example: 'Call of Duty Modern Warfare 3',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'url da capa',
    example: 'gameexample.com.br/foto.jpg',
  })
  coverImageURL: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  @ApiProperty({
    description: 'descrição do jogo',
    example: 'fps',
  })
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'ano de lançamento',
    example: '2022',
  })
  year: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'Uurl do trailer.',
    example: 'youtube.com/watch?id',
  })
  trailerYt: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Nota no IMDB',
    example: '8',
  })
  imdbScore: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'url de uma gameplay do youtbe.',
    example: 'url',
  })
  gameplayYouTubeUrl: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: 'Marcar se for favorito:',
    example: 'true ou false',
  })
  isFavorite: boolean;
}
