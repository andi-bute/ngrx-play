import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrograms from './programs.reducer';

export interface ProgramsState {
  programs: fromPrograms.ProgramState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.reducer,
};

export const getProgramsState = createFeatureSelector<ProgramsState>('programs');

export const getProgramState = createSelector(
  getProgramsState,
  (state: ProgramsState) => state.programs
);

export const getAllPrograms = createSelector(getProgramState, fromPrograms.getPrograms);
export const getProgramsLoaded = createSelector(getProgramState, fromPrograms.getProgramsLoaded);
export const getProgramsLoading = createSelector(getProgramState, fromPrograms.getProgramsLoading);
