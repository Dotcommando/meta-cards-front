import { AUTH, SIGN_UP, urlPart } from '../../common/constants';
import { IUserSignUpReq } from '../../types';
import { api } from '../api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    [SIGN_UP]: builder.mutation({
      query: ({ body }: { body: IUserSignUpReq }) => ({
        url: AUTH + urlPart(SIGN_UP),
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignUpMutation,
} = authApi;
