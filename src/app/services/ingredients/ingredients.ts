import { Ingredient } from "src/app/models/ingregient.interface";

export class ExtendedIngregients implements Ingredient {
  public name: string;
  public price: number;
  public id: string;
  public count: number;
  
  constructor (ingredient: Ingredient) {
    this.name = ingredient.name;
    this.price = ingredient.price;
    this.id = ingredient.id;
    this.count = 0;
  }
}