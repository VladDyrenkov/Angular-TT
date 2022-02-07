import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class Counter {
  @Output() public countChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() public count: number = 1;

  constructor() { 
  }

  public increase(): void {
    this.count++;
    this.countChange.emit(this.count);    
  }

  public decrease(): void {
    if(this.count > 1){
      this.count--;
      this.countChange.emit(this.count);
    }
  }
}
