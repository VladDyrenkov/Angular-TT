import { AuthService } from 'src/app/services/Auth/auth.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs';
import { logInAction, userSaveAction } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor (private actions: Actions, private authService?: AuthService) {
  }

  logInEffect$ = createEffect(() => this.actions.pipe(
    ofType(logInAction),
    mergeMap((action) => this.authService!.checkUser(action.email, action.password)
      .pipe(
        map(user => userSaveAction(user)),
        catchError(() => EMPTY)
      ))
    )
  );
}