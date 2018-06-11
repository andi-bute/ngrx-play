import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromPrograms from '../reducers/programs.reducer';

import { Program } from '../../models/program.model';

export const getProgramState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.programs
);

export const getProgramsEntities = createSelector(
  getProgramState,
  fromPrograms.getProgramsEntities
);

//does not work on route load, need to migrate from program list
//TODO: load single program as needed
export const getSelectedProgram = createSelector(
  getProgramsEntities,
  fromRoot.getRouterState,
  (entities, router): Program => {
    return router.state && entities[router.state.params.programId];
  }
);

export const getAllPrograms = createSelector(getProgramsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getProgramsLoaded = createSelector(
  getProgramState,
  fromPrograms.getProgramsLoaded
);
export const getProgramsLoading = createSelector(
  getProgramState,
  fromPrograms.getProgramsLoading
);
