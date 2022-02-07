import { createAction, props } from "@ngrx/store";
import { Dish } from "src/app/models/dish.interface";

export const uploadingDish = createAction(
  '[Upload Dish]'
);

export const uploadDishSave = createAction(
  '[uploadedDish Save]',
  props<{dish: Dish[]}>()
);