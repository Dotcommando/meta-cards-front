export const PREFIX_V1 = process.env.NEXT_PUBLIC_HOST + '/api/v1';
export const SIGN_IN = '/auth/sign-in';
export const SIGN_UP = '/auth/sign-up';
export const LOGOUT = '/auth/logout';

export function getApiUrl(slug: string): string {
  switch (slug) {
    case SIGN_IN:
      return PREFIX_V1 + SIGN_IN;
    case SIGN_UP:
      return PREFIX_V1 + SIGN_UP;
    case LOGOUT:
      return PREFIX_V1 + LOGOUT;
    default:
      throw new Error(`Slug ${slug} is not recognized for current api.`);
  }
}
