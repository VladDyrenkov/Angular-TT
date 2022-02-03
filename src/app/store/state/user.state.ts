import { IUser } from "../interface/users.interface";

export interface IUserState {
  user: IUser | null;
}

export const initialUserState: IUserState = {
  user: null,
}