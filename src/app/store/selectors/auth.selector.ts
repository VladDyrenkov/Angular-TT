import { createSelector } from "@ngrx/store";
import { AuthState } from "../state/auth.state";

export const authSelecttor = (state: { user: any; }) => state.user;
  
export const AuthUserSelector = createSelector(
  authSelecttor,
  (state: AuthState) => state.user
);