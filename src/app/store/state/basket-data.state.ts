import { BasketTotal } from "src/app/models/basket-data.interface"

export interface BasketTotalState {
  basketTotal: BasketTotal | null
};

export const initialIBasketTotalState: BasketTotalState = {
  basketTotal: null
}