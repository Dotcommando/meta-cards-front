import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/slice';
import usersReducer from './users/slice';

const rootReducer = combineReducers({ auth: authReducer, users: usersReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
});
