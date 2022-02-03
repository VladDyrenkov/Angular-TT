import { IDish } from "../interface/dish.interface";

export interface IDishState {
  dish: IDish[]
};

export const initialDishUploadingState: IDishState = {
  dish: []
};