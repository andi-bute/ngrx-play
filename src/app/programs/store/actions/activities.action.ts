import { Action } from '@ngrx/store';

import { Activity } from '../../models/activity.model';

export const LOAD_ACTIVITIES = 'Load Activities';
export const LOAD_ACTIVITIES_FAIL = 'Load Activities Fail';
export const LOAD_ACTIVITIES_SUCCESS = 'Load Activities Success';

export class LoadActivities implements Action {
  readonly type = LOAD_ACTIVITIES;
}

export class LoadActivitiesFail implements Action {
  readonly type = LOAD_ACTIVITIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadActivitiesSuccess implements Action {
  readonly type = LOAD_ACTIVITIES_SUCCESS;
  constructor(public payload: Activity[]) {}
}

// action types
export type ActivitiesAction =
  | LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess;
