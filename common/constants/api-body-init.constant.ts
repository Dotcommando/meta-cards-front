import { API_HEADERS } from './api-headers.constant';
import { LOGOUT, SIGN_IN, SIGN_UP } from './api-urls.constant';

import { ILogoutReq, IUserSignUpReq } from '../../types';

export const API_BODY_INIT = {
  [SIGN_IN]: (body: { email: string; password: string }) => ({
    ...API_HEADERS[SIGN_IN],
    body: JSON.stringify(body),
  }),
  [SIGN_UP]: (body: IUserSignUpReq) => ({
    ...API_HEADERS[SIGN_UP],
    body: JSON.stringify(body),
  }),
  [LOGOUT]: (body: ILogoutReq) => ({
    ...API_HEADERS[SIGN_UP],
    body: JSON.stringify(body),
  }),
};
