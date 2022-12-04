import { IRootState, UsersState } from '../../types';

export const selectUsers = (state: IRootState): UsersState => state.users;
