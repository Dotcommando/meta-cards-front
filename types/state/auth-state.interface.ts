export interface IAuthState {
  userId: string | null;
  accessTokenExpiredAfter: number;
  refreshTokenExpiredAfter: number;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  isAdmin: boolean;

  signInUserIsLoading: boolean;
  signInUserIsSuccess: boolean;
  signInUserIsError: boolean;
  signInUserMessage: string;

  confirmEmailIsLoading: boolean;
  confirmEmailIsSuccess: boolean;
  confirmEmailIsError: boolean;
  confirmEmailIsMessage: string;

  signUpUserIsLoading: boolean;
  signUpUserIsSuccess: boolean;
  signUpUserIsError: boolean;
  signUpUserMessage: string;

  forgetPasswordIsLoading: boolean;
  forgetPasswordIsSuccess: boolean;
  forgetPasswordIsError: boolean;
  forgetPasswordMessage: string;

  resetPasswordIsLoading: boolean;
  resetPasswordIsSuccess: boolean;
  resetPasswordIsError: boolean;
  resetPasswordMessage: string;
}
