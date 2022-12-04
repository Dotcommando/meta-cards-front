export interface IAuthDataProps {
  userId: string | null;
  accessTokenExpiredAfter: number;
  refreshTokenExpiredAfter: number;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  isAdmin: boolean;
}
