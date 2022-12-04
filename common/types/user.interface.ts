import { IBasicUserData } from './basic-user-data.interface';

import { GROUP_ROLE, ROLE } from '../constants';


export interface IMembership<TGroup = string> {
  role: GROUP_ROLE;
  group: TGroup;
}

export interface IUser<T_id = string, TGroup = string> extends IBasicUserData {
  _id: T_id;
  avatar: string;
  role: ROLE;
  groups: IMembership<TGroup>[];
  emailConfirmed: boolean;
  phoneConfirmed: boolean;
  deactivated: boolean;
  suspended: boolean;
}
