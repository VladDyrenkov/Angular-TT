import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/users.interface"; 

export const logInAction = createAction (
  '[Login Page] Login',
  props<{ email: string; password: string }>()
);

export const userSaveAction = createAction (
  '[User Save]',
  props<User>()
);

export const logOutAction = createAction (
  '[LogOut]'
);
