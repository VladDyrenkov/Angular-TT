import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Category } from "src/app/models/category.interface";
import { Dish } from "src/app/models/dish.interface";
import { CategoryState } from "../state/category.state";
import { DishState } from "../state/dish.uploading.state";

export const uploadedDish = ( state: AppState) => state.dishState;
export const uploadedCategories = ( state: AppState) => state.categoryState;

export const filteredDish = createSelector(
  uploadedDish,
  uploadedCategories,
  (uploadedDish: DishState, uploadedCategories: CategoryState, props: string) => {
    console.log(uploadedDish, uploadedCategories);
    
    const idForFilter = uploadedCategories.category.find((category: Category) => category.url === props)?.id || '';
    return uploadedDish.dish.filter((dish: Dish) => dish.category.includes(idForFilter));
  }
)