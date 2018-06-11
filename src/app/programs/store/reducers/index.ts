import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPrograms from './programs.reducer';
import * as fromActivities from './activities.reducer';


export interface ProgramsState {
  programs: fromPrograms.ProgramState;
  activities: fromActivities.ActivitiesState;

}

export const reducers: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.reducer,
  activities: fromActivities.reducer,
};

export const getProgramsState = createFeatureSelector<ProgramsState>('programs');
