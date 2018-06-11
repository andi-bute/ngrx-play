import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as activitiesActions from '../actions/activities.action';
import { ActivitiesService } from '../../services/activities.service';
import * as fromRoot from '../../../../app/store';

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

  @Effect()
  createActivity$ = this.actions$.ofType(activitiesActions.CREATE_ACTIVITY).pipe(
    map((action: activitiesActions.CreateActivity) => action.payload),
    switchMap(activity => {
      return this.activitiesService
        .createActivity(activity)
        .pipe(
          map(activityEntity => new activitiesActions.CreateActivitySuccess(activityEntity)),
          catchError(error => of(new activitiesActions.CreateActivityFail(error)))
        );
    })
  );

  @Effect()
  createActivitySuccess$ = this.actions$
    .ofType(activitiesActions.CREATE_ACTIVITY_SUCCESS)
    .pipe(
      map((action: activitiesActions.CreateActivitySuccess) => action.payload),
      map(activity => {
        // TODO: go to homepage?
      })
    );

  @Effect()
  removeActivity$ = this.actions$.ofType(activitiesActions.REMOVE_ACTIVITY).pipe(
    map((action: activitiesActions.RemoveActivity) => action.payload),
    switchMap(activity => {
      return this.activitiesService
        .removeActivity(activity)
        .pipe(
          map(() => new activitiesActions.RemoveActivitySuccess(activity)),
          catchError(error => of(new activitiesActions.RemoveActivityFail(error)))
        );
    })
  );

  @Effect()
  handleActivitySuccess$ = this.actions$
    .ofType(
      activitiesActions.REMOVE_ACTIVITY_SUCCESS
    );
    // .pipe(
    //   map(activity => {
    //     map(() => new activitiesActions.RemoveActivitySuccess(activity)),
    //       catchError(error => of(new activitiesActions.RemoveActivityFail(error)))
    //   })
    // );
}
