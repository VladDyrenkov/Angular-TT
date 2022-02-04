import { UserState, initialUserState } from 'src/app/store/state/user.state';
import { DishState, initialDishUploadingState } from "./state/dish.uploading.state";
import { CategoryState, initialICategoryState } from "./state/category.state";
import { BasketTotalState, initialIBasketTotalState } from "./state/basket-data.state";
import { AuthState, initialAuthState } from 'src/app/store/state/auth.state'

export interface AppState {
  dishState: DishState;
  categoryState: CategoryState;
  basketTotalState: BasketTotalState;
  user: UserState;
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