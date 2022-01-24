import { Component, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ExtendedDish } from 'src/app/services/dish/dish';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  // @Output() public sendVisibilityStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  // public selectedDish:ExtendedDish[] = []; 
  // public catalogDish:ExtendedDish[] = [];
  public isHide: boolean = true;
  public dish$: Subject<any> = new BehaviorSubject([]);

  constructor(private basketService: BasketService) { 
    this.dish$ = basketService.dish$;
  }
  // ngOnInit(): void {
  //   this.catalogDish = [];
  //   this.basketService.dish$.subscribe((data) => {
  //     this.selectedDish = data;
  //   })
  // }

  //recalculate price after change order
  public recalcPrice(){
    this.basketService.recalcTotalPrice();
  }

  public showBaskett() {
    this.isHide = false;
  }

  public hideBasket(){
    this.isHide = true;
  }

  //delete selected dish from Order
  public deleteDish(id: string): void{
    this.basketService.deleteFromOrder(id);
  }
}