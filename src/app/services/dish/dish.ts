import { Dish } from '../../models/dish.interface';

export class ExtendedDish implements Dish {
  public name: string;
  public price: string;
  public id: string;
  public category: string[];
  public image: string;
  public count: number;

  constructor(dish: Dish) {
    this.name = dish.name;
    this.price = dish.price;
    this.id = dish.id;
    this.category = dish.category;
    this.image = dish.image
    this.count = 1;
  }
}