import { IBasketTotal } from "../interface/basket-data.interface";

export interface IBasketTotalState {
  basketTotal: IBasketTotal | null
};

export const initialIBasketTotalState: IBasketTotalState = {
  basketTotal: null
}