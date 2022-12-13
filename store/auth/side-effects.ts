import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_BODY_INIT } from '../../common/constants';
import { getApiUrl, LOGOUT, SIGN_IN, SIGN_UP } from '../../common/constants/api-urls.constant';
import { statusIsNotOk } from '../../common/helpers';
import { IResponse } from '../../common/types';
import { ILogoutReq, ILogoutRes, IUserSignInRes, IUserSignUpReq } from '../../types';

export const signInReq = createAsyncThunk<
  IUserSignInRes,
  { email: string; password: string },
  { rejectValue: { message: string } }
>(
  SIGN_IN,
  async (
    body: { email: string; password: string },
    { rejectWithValue },
  ): Promise<IUserSignInRes | ReturnType<typeof rejectWithValue>> => {
    const response: Response = await fetch(getApiUrl(SIGN_IN), API_BODY_INIT[SIGN_IN](body));
    const responseBody: IResponse<IUserSignInRes> = await response.json();

    if (!responseBody || statusIsNotOk(responseBody.status)) {
      return rejectWithValue({
        message: responseBody.errors?.[0] ?? 'Sign in request rejected',
      });
    }

    // @ts-ignore
    return responseBody.data;
  }
);

export const signUpReq = createAsyncThunk<
  IUserSignInRes,
  IUserSignUpReq,
  { rejectValue: { message: string } }
>(
  SIGN_UP,
  async (
    body: IUserSignUpReq,
    { rejectWithValue },
  ): Promise<IUserSignInRes | ReturnType<typeof rejectWithValue>> => {
    const response: Response = await fetch(getApiUrl(SIGN_UP), API_BODY_INIT[SIGN_UP](body));
    const responseBody: IResponse<IUserSignInRes> = await response.json();

    if (!responseBody || statusIsNotOk(responseBody.status)) {
      return rejectWithValue({
        message: responseBody.errors?.[0] ?? 'Sign up request rejected',
      });
    }

    // @ts-ignore
    return responseBody.data;
  }
);

export const logoutReq = createAsyncThunk<
  ILogoutRes,
  ILogoutReq,
  { rejectValue: { message: string } }
>(
  LOGOUT,
  async (
    body: ILogoutReq,
    { rejectWithValue },
  ): Promise<IUserSignInRes | ReturnType<typeof rejectWithValue>> => {
    const response: Response = await fetch(getApiUrl(LOGOUT), API_BODY_INIT[LOGOUT](body));
    const responseBody: IResponse<IUserSignInRes> = await response.json();

    if (!responseBody || statusIsNotOk(responseBody.status)) {
      return rejectWithValue({
        message: responseBody.errors?.[0] ?? 'Sign up request rejected',
      });
    }

    // @ts-ignore
    return responseBody.data;
  }
);
