import { UserDTO } from '@/dtos/UserDTO';

import SignInCredentialsDTO from './SignInCredentialsDTO';

export default interface AuthContextDTO {
  user: UserDTO;
  loading: boolean;
  signIn(credentials: SignInCredentialsDTO): Promise<void>;
  signOut(): void;
  updateUser(user: UserDTO): void;
}
