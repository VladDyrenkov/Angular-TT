import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ExtendedDish } from 'src/app/services/dish/dish';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  @Output() public sendVisibilityStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  public selectedDish:ExtendedDish[] = []; 
  public catalogDish:ExtendedDish[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.catalogDish = [];
    this.basketService.sendDish$.subscribe((data) => {
      this.selectedDish = data;
    })
  }

  //recalculate price after change order
  public recalcPrice(){
    console.log(this.selectedDish)
    this.basketService.recalcTotalPrice();
  }

  //send visibility status of basket
  public showBasket() {
    this.sendVisibilityStatus.emit(false);
  }

  //delete selected dish from Order
  public deleteDish(id: string): void{
    this.basketService.deleteFromOrder(id);
  }
}