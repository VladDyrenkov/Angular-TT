import { uploadDishSave, uploadingDish } from "../actions/dish.loading.actions";
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { DishState, initialDishUploadingState } from "../state/dish.uploading.state";

export const uploadDishReducer: ActionReducer<DishState, Action> = createReducer(
  initialDishUploadingState,
  on(uploadingDish, (state) => {
    return {...state}
  }),
  on(uploadDishSave, (state, {dish: dish}) => {
    return {...state, dish: dish}
  })
);