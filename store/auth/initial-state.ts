import { IAuthState } from '../../types';

export const initialState: IAuthState = {
  userId: null,
  accessTokenExpiredAfter: 0,
  refreshTokenExpiredAfter: 0,
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
  isAdmin: false,

  signInUserIsLoading: false,
  signInUserIsSuccess: false,
  signInUserIsError: false,
  signInUserMessage: '',

  confirmEmailIsLoading: false,
  confirmEmailIsSuccess: false,
  confirmEmailIsError: false,
  confirmEmailIsMessage: '',

  signUpUserIsLoading: false,
  signUpUserIsSuccess: false,
  signUpUserIsError: false,
  signUpUserMessage: '',

  forgetPasswordIsLoading: false,
  forgetPasswordIsSuccess: false,
  forgetPasswordIsError: false,
  forgetPasswordMessage: '',

  resetPasswordIsLoading: false,
  resetPasswordIsSuccess: false,
  resetPasswordIsError: false,
  resetPasswordMessage: '',
};
