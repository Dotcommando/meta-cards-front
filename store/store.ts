import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/lib/constants';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from './api';
import authReducer from './auth/slice';
import usersReducer from './users/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  [api.reducerPath]: api.reducer,
});
const persistConfig = {
  key: 'root',
  blacklist: [ api.reducerPath ],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [ FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE ],
    },
  })
    .concat([ thunkMiddleware, api.middleware ]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
