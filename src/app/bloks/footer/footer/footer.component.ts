import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../services/basket/basket.service';
import { Data } from '../../../services/basket/basket.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public data: Data = {
    sum: 0,
    value: 0,
  };

  public isVisibleBasket: boolean = false;

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basketService.sendPrice$.subscribe((data) => {
      console.log(data);
      
      this.data = data;
    })
  }

  public showBasket(basketVisibility: boolean = true) {
    this.isVisibleBasket = basketVisibility;
    console.log(this.data)
  }

}
