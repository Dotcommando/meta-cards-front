import { IUser } from '../../common/types';

export interface IUserSignInRes {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredAfter: number;
  refreshTokenExpiredAfter: number;
}
