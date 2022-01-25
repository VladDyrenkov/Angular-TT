import { Component, EventEmitter, OnInit, Output, Input, DoCheck, OnDestroy} from '@angular/core';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ExtendedDish } from 'src/app/services/dish/dish';
import { Dish } from 'src/app/models/dish.interface';

@Component({
  selector: 'app-dialog-selected-dish',
  templateUrl: './dialog-selected-dish.component.html',
  styleUrls: ['./dialog-selected-dish.component.scss']
})
export class DialogSelectedDishComponent {
  @Output() dialogButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set selectedDishLink(dish: Dish | undefined) {
    this.selectedDish = new ExtendedDish(dish ? JSON.parse(JSON.stringify(dish)) : {});
  }
  isHide: boolean = true;

  public selectedDish!: ExtendedDish;

  constructor(private basketService: BasketService) {
  }

  confirm() {
    if(this.selectedDish.count){
      this.basketService.saveDish(this.selectedDish);
    }
    this.hideDialog();
  }

  //Sending status visibility of edit order window
  public hideDialog(){
    this.selectedDish.count = 1;
    this.isHide = true;
  }

  public showDialog(){
    this.isHide = false;
  }
}
