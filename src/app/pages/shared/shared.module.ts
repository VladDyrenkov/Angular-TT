import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter } from './counter/counter.component';



@NgModule({
  declarations: [Counter],
  imports: [
    CommonModule,
  ],
  exports: [Counter]
})
export class SharedModule { }
