import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs/index';
import { catchError, map, mergeMap } from 'rxjs/internal/operators';
import * as authActions from './auth.actions';
import { AuthService } from './auth.service';


@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions, private _AuthService: AuthService) {}

  @Effect()
  getTestData: Observable<Action> = this._actions$.pipe(
    ofType<authActions.SignInAction>(authActions.ActionTypes.SignInAction),
    mergeMap(action => {
      return this._AuthService.signIn(action.payload.email, action.payload.password).pipe(
        map(data => ({ type: authActions.ActionTypes.SignInActionSuccess, payload: data })),
        catchError(err => of({ type: authActions.ActionTypes.SignInActionFail, payload: err }))
      );
    })
  );
}
