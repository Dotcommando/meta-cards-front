import { HYDRATE } from 'next-redux-wrapper';

import { NoInfer } from 'react-redux';

import {
  Action,
  ActionReducerMapBuilder,
  createSlice,
  Draft,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { initialState } from './initial-state';
import { signInReq, signUpReq } from './side-effects';

import { ROLE } from '../../common/constants';
import { AUTH_SIGNIN_RESET, AUTH_SIGNUP_RESET } from '../../constants';
import { IAuthState, IUserSignInRes } from '../../types';

const authSlice: Slice<IAuthState, SliceCaseReducers<IAuthState>> = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [AUTH_SIGNIN_RESET]: (state: Draft<IAuthState>): IAuthState => ({
      ...state,
      signInUserIsLoading: false,
      signInUserIsSuccess: false,
      signInUserIsError: false,
      signInUserMessage: '',
      isAuthenticated: false,
      isAdmin: false,
      userId: null,
      accessToken: '',
      refreshToken: '',
      accessTokenExpiredAfter: 0,
      refreshTokenExpiredAfter: 0,
    }),
    [AUTH_SIGNUP_RESET]: (state: Draft<IAuthState>) => ({
      ...state,
      signUpUserIsLoading: false,
      signUpUserIsSuccess: false,
      signUpUserIsError: false,
      signUpUserMessage: '',
      isAuthenticated: false,
      isAdmin: false,
      userId: null,
      accessToken: '',
      refreshToken: '',
      accessTokenExpiredAfter: 0,
      refreshTokenExpiredAfter: 0,
    }),
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IAuthState>>) => {
    builder
      .addCase(HYDRATE, (state: Draft<IAuthState>, action: Action<any>) => ({
        ...state,
        // @ts-ignore
        ...action.payload.auth,
      }))
      .addCase(String(signUpReq.pending), (state: Draft<IAuthState>) => ({
        ...state,
        signUpUserIsLoading: true,
        signUpUserIsSuccess: false,
        signUpUserIsError: false,
        signUpUserMessage: 'PENDING',
        isAuthenticated: false,
        isAdmin: false,
        userId: null,
        accessToken: '',
        refreshToken: '',
        accessTokenExpiredAfter: 0,
        refreshTokenExpiredAfter: 0,
      }))
      .addCase(String(signUpReq.fulfilled), (state: Draft<IAuthState>, action: PayloadAction<IUserSignInRes>) => {
        const { user, accessToken, refreshToken, accessTokenExpiredAfter, refreshTokenExpiredAfter } = action.payload;

        return {
          ...state,
          signUpUserIsLoading: false,
          signUpUserIsSuccess: false,
          signUpUserIsError: false,
          signUpUserMessage: '',
          isAuthenticated: true,
          isAdmin: user.role === ROLE.ADMIN,
          userId: user._id,
          accessToken,
          refreshToken,
          accessTokenExpiredAfter,
          refreshTokenExpiredAfter,
        };
      })
      .addCase(String(signUpReq.rejected), (state: Draft<IAuthState>, action: PayloadAction<any>) => ({
        ...state,
        signUpUserIsLoading: false,
        signUpUserIsSuccess: false,
        signUpUserIsError: true,
        // @ts-ignore
        signUpUserMessage: action?.payload?.message ?? action?.error?.message ?? 'Cannot fetch data',
        isAuthenticated: false,
        isAdmin: false,
        userId: null,
        accessToken: '',
        refreshToken: '',
        accessTokenExpiredAfter: 0,
        refreshTokenExpiredAfter: 0,
      }))
      .addCase(String(signInReq.pending), (state: Draft<IAuthState>) => ({
        ...state,
        signInUserIsLoading: true,
        signInUserIsSuccess: false,
        signInUserIsError: false,
        signInUserMessage: 'PENDING',
        isAuthenticated: false,
        isAdmin: false,
        userId: null,
        accessToken: '',
        refreshToken: '',
        accessTokenExpiredAfter: 0,
        refreshTokenExpiredAfter: 0,
      }))
      .addCase(String(signInReq.fulfilled), (state: Draft<IAuthState>, action: PayloadAction<IUserSignInRes>) => {
        const { user, accessToken, refreshToken, accessTokenExpiredAfter, refreshTokenExpiredAfter } = action.payload;

        return {
          ...state,
          signInUserIsLoading: false,
          signInUserIsSuccess: false,
          signInUserIsError: false,
          signInUserMessage: '',
          isAuthenticated: true,
          isAdmin: user.role === ROLE.ADMIN,
          userId: user._id,
          accessToken,
          refreshToken,
          accessTokenExpiredAfter,
          refreshTokenExpiredAfter,
        };
      })
      .addCase(String(signInReq.rejected), (state: Draft<IAuthState>, action: PayloadAction<any>) => ({
        ...state,
        signInUserIsLoading: false,
        signInUserIsSuccess: false,
        signInUserIsError: true,
        // @ts-ignore
        signInUserMessage: action?.payload?.message ?? action?.error?.message ?? 'Cannot fetch data',
        isAuthenticated: false,
        isAdmin: false,
        userId: null,
        accessToken: '',
        refreshToken: '',
        accessTokenExpiredAfter: 0,
        refreshTokenExpiredAfter: 0,
      }));
  },
});

export const {
  authSigninReset,
  authSignupReset,
} = authSlice.actions;

export default authSlice.reducer;
