import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  public isHide: boolean = true;
  public dish$: Subject<any>;

  constructor(private basketService: BasketService) { 
    this.dish$ = basketService.dish$;
  }

  //recalculate price after change order
  public recalcPrice() {
    this.basketService.recalcTotalPrice();
  }

  public showBaskett() {
    this.isHide = false;
  }

  public hideBasket() {
    this.isHide = true;
  }

  //delete selected dish from Order
  public deleteDish(id: string): void{
    this.basketService.deleteFromOrder(id);
  }
}