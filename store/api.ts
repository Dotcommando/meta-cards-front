import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_V1, BASE_URL } from '../common/constants';
import { DEFAULT_TIMEOUT, SPLIT_API } from '../constants';

export const api = createApi({
  reducerPath: SPLIT_API,
  keepUnusedDataFor: 7 * 24 * 60 * 60,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + API_V1,
    timeout: DEFAULT_TIMEOUT,
  }),
  endpoints: () => ({}),
});
