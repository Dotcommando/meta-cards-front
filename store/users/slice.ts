import { HYDRATE } from 'next-redux-wrapper';

import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { IUser } from '../../common/types';

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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
  setAllUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
