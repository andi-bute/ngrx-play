import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromActivities from '../reducers/activities.reducer';

export const getActivitiesState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.activities
);

export const getActivityEntities = createSelector(
  getActivitiesState,
  fromActivities.getActivityEntities
);

export const getAllActivities = createSelector(getActivityEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getActivitiesLoaded = createSelector(
  getActivitiesState,
  fromActivities.getActivitiesLoaded
);

export const getActivitiesLoading = createSelector(
  getActivitiesState,
  fromActivities.getActivitiesLoading
);
