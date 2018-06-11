import * as fromActivities from '../actions/activities.action';
import { Activity } from '../../models/activity.model';

export interface ActivitiesState {
  entities: { [id: number]: Activity };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ActivitiesState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromActivities.ActivitiesAction
): ActivitiesState {
  switch (action.type) {
    case fromActivities.LOAD_ACTIVITIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActivities.LOAD_ACTIVITIES_SUCCESS: {
      const activities = action.payload;

      const entities = activities.reduce(
        (entities: { [id: number]: Activity }, activity: Activity) => {
          return {
            ...entities,
            [activity.id]: activity,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case fromActivities.LOAD_ACTIVITIES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }

  return state;
}

export const getActivityEntities = (state: ActivitiesState) => state.entities;
export const getActivitiesLoaded = (state: ActivitiesState) => state.loaded;
export const getActivitiesLoading = (state: ActivitiesState) => state.loading;
