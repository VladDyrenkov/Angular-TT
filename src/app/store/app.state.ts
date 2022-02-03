import { RouterReducerState } from "@ngrx/router-store";
import { IUserState, initialUserState } from 'src/app/store/state/user.state';
import { IDishState, initialDishUploadingState } from "./state/dish.uploading.state";
import { ICategoryState, initialICategoryState } from "./state/category.state";
import { IBasketTotalState, initialIBasketTotalState } from "./state/basket-data.state";
import { AuthState, initialAuthState } from 'src/app/store/state/auth.state'

export interface AppState {
  router?: RouterReducerState;
  dishState: IDishState;
  categoryState: ICategoryState;
  basketTotalState: IBasketTotalState;
  user: IUserState;
  authState: AuthState;
}

export const initialAppState: AppState = {
  authState: initialAuthState,
  dishState: initialDishUploadingState,
  categoryState: initialICategoryState,
  basketTotalState: initialIBasketTotalState,
  user: initialUserState
};

export function getInitialState(): AppState {
  return initialAppState;
}