import { IAuthState } from './auth-state.interface';
import { UsersState } from './users-state.type';

export interface IRootState {
  users: UsersState;
  auth: IAuthState;
}
