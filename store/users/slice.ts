import { HYDRATE } from 'next-redux-wrapper';

import { NoInfer } from 'react-redux';

import {
  Action,
  ActionReducerMapBuilder,
  createEntityAdapter,
  createSlice,
  Draft,
  EntityState,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { IUser } from '../../common/types';
import { IUserSignInRes, UsersState } from '../../types';
import { signInReq, signUpReq } from '../auth';

const usersAdapter = createEntityAdapter<IUser>({
  selectId: user => user._id,
});

const usersSlice: Slice<EntityState<IUser>, SliceCaseReducers<EntityState<IUser>>> = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addUser: usersAdapter.addOne,
    removeUser: usersAdapter.removeOne,
    updateUser: usersAdapter.upsertOne,
    setAllUsers(state, action: PayloadAction<{ users: IUser[] }>) {
      usersAdapter.setAll(state, action.payload.users);
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<EntityState<IUser>>>) => {
    builder
      .addCase(HYDRATE, (state: Draft<UsersState>, action: Action<any>) => ({
        ...state,
        // @ts-ignore
        ...action.payload.auth,
      }))
      .addCase(String(signUpReq.fulfilled), (state: Draft<UsersState>, action: PayloadAction<IUserSignInRes>) => {
        const { user } = action.payload;

        return usersAdapter.addOne(state, user);
      })
      .addCase(String(signInReq.fulfilled), (state: Draft<UsersState>, action: PayloadAction<IUserSignInRes>) => {
        const { user } = action.payload;

        return usersAdapter.addOne(state, user);
      });
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
  setAllUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
