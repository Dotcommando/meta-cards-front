import { EntityId } from '@reduxjs/toolkit';

import { IUser } from '../../common/types';
import { IRootState, UsersState } from '../../types';

export const selectUsers = (state: IRootState): UsersState => state.users;
export const selectUserById = (id: string | null) => (state: IRootState): IUser | null => {
  if (!id) return null;

  const idExists = state.users.ids.find((entityId: EntityId) => entityId === id);

  if (!idExists) return null;

  return state.users.entities[id] ?? null;
};
