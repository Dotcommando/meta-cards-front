import { IAuthState, IRootState } from '../../types';

export const selectAuth = (state: IRootState): IAuthState => state.auth;
