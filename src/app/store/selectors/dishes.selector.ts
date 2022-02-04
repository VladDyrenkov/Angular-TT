import { createSelector } from "@ngrx/store";
import { IDishState } from "../state/dish.uploading.state";

export const dishesSelecttor = (state: { dishes: any; }) => state.dishes;
  
export const AuthUserSelector = createSelector(
  dishesSelecttor,
  (state: IDishState) => state.dish
);