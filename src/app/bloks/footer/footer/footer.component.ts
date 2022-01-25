import { Component, OnInit, ViewChild } from '@angular/core';
import { BasketService } from '../../../services/basket/basket.service';
import { BasketTotal } from 'src/app/models/basket-data.interface';
import { BasketComponent } from '../basket/basket.component'
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild ('basketCard', {static: false}) basket!: BasketComponent;
  public basketTotal!: BasketTotal;

  public basketTotal$:Subject<any>;
  constructor(private basketService: BasketService) {
    this.basketTotal$ = basketService.basketTotal$;
  }
}
