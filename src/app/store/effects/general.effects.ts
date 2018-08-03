import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { GeneralService } from '../services/general.service';
import { Observable, of } from 'rxjs/index';
import { catchError, map, mergeMap } from 'rxjs/internal/operators';
import * as generalActions from '../actions/general.actions';



@Injectable()
export class GeneralEffects {
  constructor(private _actions$: Actions, private _generalService: GeneralService) {}

  @Effect()
  getTestData: Observable<Action> = this._actions$.pipe(
    ofType<generalActions.GetTestDataAction>(generalActions.GeneralActionTypes.GetTestDataAction),
    mergeMap(action => {
      return this._generalService.getTestData().pipe(
        map(data => ({ type: generalActions.GeneralActionTypes.GetTestDataActionSuccess, payload: data })),
        catchError(err => of({ type: generalActions.GeneralActionTypes.GetTestDataActionFail, payload: err }))
      );
    })
  );
}
