import { createSelector } from '@ngrx/store';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromActivities from '../reducers/activities.reducer';
import { Activity } from '../../models/activity.model';

export const getActivitiesState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.activities
);

export const getActivityEntities = createSelector(
  getActivitiesState,
  fromActivities.getActivityEntities
);

export const getSelectedProgramActivities = createSelector(
  getActivityEntities,
  fromRoot.getRouterState,
  (entities, router): Activity[] => {
    return router.state && filterActivitiesByProgram(entities, router.state.params.programId);
  }
);

export const getSelectedActivity = createSelector(
  getActivityEntities,
  fromRoot.getRouterState,
  (entities, router): Activity => {
    let activity: Activity = <Activity>{};
    if (router.state.params.activityId !== 'new') {
      activity =  router.state && entities[router.state.params.activityId];
    }
    return activity;
  }
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

function filterActivitiesByProgram(entities, programId) {
  const activities: Activity[] = [];
  Object.keys(entities).forEach(key => {
    if (entities[key].workflowlevel1.indexOf(`workflowlevel1/${programId}/`) !== -1 ) {
      activities.push(entities[key]);
    }
  });
  return activities;
}
