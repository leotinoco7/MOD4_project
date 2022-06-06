export class Game {
  id?: string;
  title: string;
  coverImageURL: string;
  description: string;
  year: number;
  trailerYt: string;
  imdbScore: number;
  gameplayYouTubeUrl: string;
  isFavorite: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
