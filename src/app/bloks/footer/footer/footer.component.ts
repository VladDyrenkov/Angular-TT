import { Component, OnInit, ViewChild } from '@angular/core';
import { BasketService } from '../../../services/basket/basket.service';
import { basketTotal } from 'src/app/models/basket-data.interface';
import { BasketComponent } from '../basket/basket.component'
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild ('basketCard', {static: false}) basket!: BasketComponent;
  public basketTotal!: basketTotal;

  public price$:Subject<any> = new BehaviorSubject({});
  constructor(private basketService: BasketService) {
    this.price$ = basketService.price$;
  }

  // ngOnInit(): void {
  //   this.basketService.price$.subscribe((data) => {      
  //     this.basketTotal = data;
  //   });
  // };
}
