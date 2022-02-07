import { createAction, props } from "@ngrx/store";
import { Category } from "src/app/models/category.interface";

export const uploadingCategory = createAction(
  '[Upload Category]'
);

export const uploadCategorySave = createAction(
  '[uploadCategory Save]',
  props<{category: Category[]}>()
);