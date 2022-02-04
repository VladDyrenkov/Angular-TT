import { uploadCategorySave, uploadingCategory } from "../actions/category.uploading.actions";
import { Action, ActionReducer, createAction, createReducer, on } from '@ngrx/store';
import { CategoryState, initialICategoryState } from "../state/category.state";

export const uploadingCategoryReducer: ActionReducer<CategoryState, Action> = createReducer(
  initialICategoryState,
  on(uploadingCategory, (state) => {
    return {...state}
  }),
  on(uploadCategorySave, (state, {category: category}) => {
    return {...state, category}
  })
)