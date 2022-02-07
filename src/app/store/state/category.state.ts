import { Category } from "src/app/models/category.interface";

export interface CategoryState {
  category: Category[]
};

export const initialICategoryState: CategoryState = {
  category: []
};