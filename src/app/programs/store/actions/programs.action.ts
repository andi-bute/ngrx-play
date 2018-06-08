import { Action } from '@ngrx/store';

import { Program } from '../../models/program.model';

export const LOAD_PROGRAMS = 'Load Programs';
export const LOAD_PROGRAMS_FAIL = 'Load Programs Fail';
export const LOAD_PROGRAMS_SUCCESS = 'Load Programs Success';

export class LoadPrograms implements Action {
  readonly type = LOAD_PROGRAMS;
}

export class LoadProgramsFail implements Action {
  readonly type = LOAD_PROGRAMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProgramsSuccess implements Action {
  readonly type = LOAD_PROGRAMS_SUCCESS;
  constructor(public payload: Program[]) {}
}

export type ProgramsAction = LoadPrograms | LoadProgramsFail | LoadProgramsSuccess;
