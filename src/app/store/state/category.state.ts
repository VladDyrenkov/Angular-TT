import { ICategory } from "../interface/category.interface";

export interface ICategoryState {
  categories: ICategory[]
};

export const initialICategoryState: ICategoryState = {
  categories: []
};