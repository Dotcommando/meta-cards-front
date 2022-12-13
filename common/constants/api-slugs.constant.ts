export const BASE_URL = process.env.NEXT_PUBLIC_HOST;

// Auth
export const AUTH = '/auth';
export const SIGN_UP = 'signUp';
export const SIGN_IN = 'signIn';
export const LOGOUT = 'logout';

export const urlPart = (part: string) => `/${part.split(/(?=[A-Z])/).join('-').toLowerCase()}`;
export const hookPart = (part: string) => part.substring(0, 1).toUpperCase() + part.substring(1);
