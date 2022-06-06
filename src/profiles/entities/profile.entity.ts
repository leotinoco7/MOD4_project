import { User } from 'src/user/entities/user.entity';

export class Profile {
  id?: string;
  title: string;
  imageURL: string;
  userId?: User;
}
