import * as fromActivities from './activities.reducer';
import * as fromActions from '../actions/activities.action';
import { Activity } from '../../models/activity.model';

const fixture = '{"url":"https://dev.toladata.io/api/workflowlevel1/233/",' +
  '"id":1,"status":"","budget":0,"actuals":0,"difference":0,"level1_uuid":"9387d386-2eb1-4091-b0e6-b375ffbf95a2","unique_id":null,' +
  '"name":"Activity #1","funding_status":"","cost_center":"","description":"","public_dashboard":false,"start_date":null,"end_date":null,' +
  '"create_date":"2018-05-22T12:09:30.434814+02:00","edit_date":"2018-05-22T12:09:30.434827+02:00","sort":0,' +
  '"organization":"https://dev.toladata.io/api/organization/1/","portfolio":null,"fund_code":[],"award":[],"sector":[],"sub_sector":[],' +
  '"country":[],"milestone":[],"user_access":["https://dev.toladata.io/api/tolauser/56/"]}';


describe('ActivitiesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromActivities;
      const action = {} as any;
      const state = fromActivities.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_ACTIVITIES action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromActivities;
      const action = new fromActions.LoadActivities();
      const state = fromActivities.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LOAD_ACTIVITIES_SUCCESS action', () => {
    it('should populate the fields', () => {
      const activity1 = JSON.parse(fixture);
      activity1.name = 'Activity #1';
      activity1.id = 1;
      const activity2 = JSON.parse(fixture);
      activity2.name = 'Activity #2';
      activity2.id = 2;
      const activities: Activity[] = [
        activity1,
        activity2
      ];
      const entities = {
        1: activities[0],
        2: activities[1],
      };
      const { initialState } = fromActivities;
      const action = new fromActions.LoadActivitiesSuccess(activities);
      const state = fromActivities.reducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('LOAD_ACTIVITIES_FAIL action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromActivities;
      const action = new fromActions.LoadActivitiesFail({});
      const state = fromActivities.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = fromActivities;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadActivitiesFail({});
      const state = fromActivities.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('CREATE_ACTIVITY_SUCCESS action', () => {
    it('should add the new activity to the activities array', () => {
      const activity1 = JSON.parse(fixture);
      activity1.name = 'Activity #1';
      activity1.id = 1;
      const activity2 = JSON.parse(fixture);
      activity2.name = 'Activity #2';
      activity2.id = 2;
      const activity3 = JSON.parse(fixture);
      activity3.name = 'Activity #3';
      activity3.id = 3;
      const activities: Activity[] = [
        activity1,
        activity2,
      ];
      const newActivity: Activity = activity3;
      const entities = {
        1: activities[0],
        2: activities[1],
      };
      const { initialState } = fromActivities;
      const previousState = { ...initialState, entities };
      const action = new fromActions.CreateActivitySuccess(newActivity);
      const state = fromActivities.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({ ...entities, 3: newActivity });
    });
  });

  describe('REMOVE_ACTIVITY_SUCCESS action', () => {
    it('should remove the activity', () => {
      const activity1 = JSON.parse(fixture);
      activity1.name = 'Activity #1';
      activity1.id = 1;
      const activity2 = JSON.parse(fixture);
      activity2.name = 'Activity #2';
      activity2.id = 2;
      const activities: Activity[] = [
        activity1,
        activity2
      ];
      const entities = {
        1: activities[0],
        2: activities[1],
      };
      const { initialState } = fromActivities;
      const previousState = { ...initialState, entities };
      const action = new fromActions.RemoveActivitySuccess(activities[0]);
      const state = fromActivities.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(1);
      expect(state.entities).toEqual({ 2: activities[1] });
    });
  });
});

describe('ActivitiesReducer Selectors', () => {
  describe('getActivityEntities', () => {
    it('should return .entities', () => {
      const activity1 = JSON.parse(fixture);
      activity1.name = 'Activity #1';
      activity1.id = 1;
      const activity2 = JSON.parse(fixture);
      activity2.name = 'Activity #2';
      activity2.id = 2;
      const entities: { [key: number]: Activity } = {
        1: activity1,
        2: activity2,
      };
      const { initialState } = fromActivities;
      const previousState = { ...initialState, entities };
      const slice = fromActivities.getActivityEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getActivitiesLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromActivities;
      const previousState = { ...initialState, loading: true };
      const slice = fromActivities.getActivitiesLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getActivitiesLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = fromActivities;
      const previousState = { ...initialState, loaded: true };
      const slice = fromActivities.getActivitiesLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });
});
