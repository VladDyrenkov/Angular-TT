import { createAction, props } from "@ngrx/store";
import { IUser } from "../interface/users.interface";

export const logInAction = createAction (
  '[Login Page] Login',
  props<{ email: string; password: string }>()
);

export const userSaveAction = createAction (
  '[User Save]',
  props<{user: IUser}>()
);

export const logOutAction = createAction (
  '[LogOut]'
);
