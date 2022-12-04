import { SIGN_IN, SIGN_UP } from './api-urls.constant';

export const API_HEADERS: { [key: string]: RequestInit } = {
  [SIGN_IN]: {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  },
  [SIGN_UP]: {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  },
};
