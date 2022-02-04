import { createSelector } from "@ngrx/store";
import { DishState } from "../state/dish.uploading.state";

export const dishesSelecttor = (state: { dishes: any; }) => state.dishes;
  
export const AuthUserSelector = createSelector(
  dishesSelecttor,
  (state: DishState) => state.dish
);