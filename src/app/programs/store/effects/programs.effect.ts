import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as programActions from '../actions';
import { ProgramsService } from '../../services/programs.service';
import { of } from 'rxjs';

@Injectable()
export class ProgramsEffects {
  constructor(private actions$: Actions, private programService: ProgramsService) {}

  @Effect()
  loadPrograms$ = this.actions$.ofType(programActions.LOAD_PROGRAMS).pipe(
    switchMap(() => {
      return this.programService
      .getPrograms()
      .pipe(
        map(programs => new programActions.LoadProgramsSuccess(programs)),
        catchError(error => of(new programActions.LoadProgramsFail(error)))
      );
    })
  );
}
