import { createSelector } from "@ngrx/store";
import { AuthState } from "../state/auth.state";

export const selectFeature = (state: { user: any; }) => state.user;
  
export const AuthUserSelector = createSelector(
  selectFeature,
  (state: AuthState) => state.user
);