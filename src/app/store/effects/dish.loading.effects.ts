import { uploadDishSave, uploadingDish } from "../actions/dish.loading.actions";
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, EMPTY } from 'rxjs';
import { DishesService } from "src/app/services/dish/dishes.service";


@Injectable()
export class DishUploadingEffects {
  constructor (private actions: Actions, private dishesService: DishesService){}

  dishUoloading$ = createEffect(() => this.actions.pipe(
    ofType(uploadingDish),
    mergeMap(() => this.dishesService.loadDishes()
      .pipe(
        map(dish => uploadDishSave({ dish })),
        catchError(() => EMPTY)
      ))
  ));
}