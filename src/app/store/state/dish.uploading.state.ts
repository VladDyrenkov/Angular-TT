import { Dish } from "src/app/models/dish.interface";


export interface DishState {
  dish: Dish[]
};

export const initialDishUploadingState: DishState = {
  dish: []
};