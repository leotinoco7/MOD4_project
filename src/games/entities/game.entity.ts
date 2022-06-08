import { Genre } from 'src/genre/entities/genre.entity';

export class Game {
  id?: string;
  title: string;
  coverImageURL: string;
  description: string;
  year: number;
  trailerYt: string;
  imdbScore: number;
  gameplayYouTubeUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  genres?: Genre[];
}
