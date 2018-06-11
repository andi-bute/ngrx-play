import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';
import * as fromActivitySelectors from '../store/selectors/activities.selectors';

@Injectable()
export class ActivitiesGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProgramsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromActivitySelectors.getActivitiesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadActivities());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
