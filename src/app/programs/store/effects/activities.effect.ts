import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as activitiesActions from '../actions/activities.action';
import { ActivitiesService } from '../../services/activities.service';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService
  ) {}

  @Effect()
  loadActivities$ = this.actions$.ofType(activitiesActions.LOAD_ACTIVITIES).pipe(
    switchMap(() => {
      return this.activitiesService
        .getActivities()
        .pipe(
          map(activities => new activitiesActions.LoadActivitiesSuccess(activities)),
          catchError(error => of(new activitiesActions.LoadActivitiesFail(error)))
        );
    })
  );
}
