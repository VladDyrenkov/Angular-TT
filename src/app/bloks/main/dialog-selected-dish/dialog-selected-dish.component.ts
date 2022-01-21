import { Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ExtendedDish } from 'src/app/services/dish/dish';
import { Dish } from 'src/app/models/dish.interface';

@Component({
  selector: 'app-dialog-selected-dish',
  templateUrl: './dialog-selected-dish.component.html',
  styleUrls: ['./dialog-selected-dish.component.scss']
})
export class DialogSelectedDishComponent implements OnInit {
  @Output() dialogButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedDishLink!: Dish;

  public selectedDish!: ExtendedDish;

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.selectedDish =JSON.parse(JSON.stringify(this.selectedDishLink));
  }

  confirm(dish:ExtendedDish) {
    if(this.selectedDish.count){
      this.basketService.saveDish(dish);
    }
    this.onPress();
  }

  //Sending status visibility of edit order window
  public onPress() {
    this.dialogButton.emit(false)
  }
}


