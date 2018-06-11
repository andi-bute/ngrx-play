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

export const CREATE_ACTIVITY = 'Create Activity';
export const CREATE_ACTIVITY_FAIL = 'Create Activity Fail';
export const CREATE_ACTIVITY_SUCCESS = 'Create Activity Success';

export class CreateActivity implements Action {
  readonly type = CREATE_ACTIVITY;
  constructor(public payload: Activity) {}
}

export class CreateActivityFail implements Action {
  readonly type = CREATE_ACTIVITY_FAIL;
  constructor(public payload: any) {}
}

export class CreateActivitySuccess implements Action {
  readonly type = CREATE_ACTIVITY_SUCCESS;
  constructor(public payload: Activity) {}
}

export const REMOVE_ACTIVITY = 'Remove Activity';
export const REMOVE_ACTIVITY_FAIL = 'Remove Activity Fail';
export const REMOVE_ACTIVITY_SUCCESS = 'Remove Activity Success';

export class RemoveActivity implements Action {
  readonly type = REMOVE_ACTIVITY;
  constructor(public payload: Activity) {}
}

export class RemoveActivityFail implements Action {
  readonly type = REMOVE_ACTIVITY_FAIL;
  constructor(public payload: any) {}
}

export class RemoveActivitySuccess implements Action {
  readonly type = REMOVE_ACTIVITY_SUCCESS;
  constructor(public payload: Activity) {}
}

// action types
export type ActivitiesAction =
  | LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess
  | CreateActivity
  | CreateActivityFail
  | CreateActivitySuccess
  | RemoveActivity
  | RemoveActivityFail
  | RemoveActivitySuccess;
