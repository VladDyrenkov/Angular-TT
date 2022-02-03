import { uploadDishSave, uploadingDish } from "../actions/dish.loading.actions";
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IDishState, initialDishUploadingState } from "../state/dish.uploading.state";
import { state } from "@angular/animations";

export const uploadDishReducer: ActionReducer<IDishState, Action> = createReducer(
  initialDishUploadingState,
  on(uploadingDish, (state) => {
    return {...state}
  }),
  on(uploadDishSave, (state, {dish: dish}) => {
    return {...state, dish}
  })
);