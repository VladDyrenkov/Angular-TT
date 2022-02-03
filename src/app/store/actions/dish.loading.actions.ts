import { createAction, props } from "@ngrx/store";
import { IDish } from "../interface/dish.interface";

export const uploadingDish = createAction(
  '[Upload Dish]'
);

export const uploadDishSave = createAction(
  '[uploadedDish Save]',
  props<{dish: IDish[]}>()
);