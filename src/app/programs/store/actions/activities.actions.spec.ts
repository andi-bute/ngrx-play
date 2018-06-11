import * as fromActivities from './activities.action';

const fixture = '{"url":"https://dev.toladata.io/api/workflowlevel1/233/",' +
  '"id":1,"status":"","budget":0,"actuals":0,"difference":0,"level1_uuid":"9387d386-2eb1-4091-b0e6-b375ffbf95a2","unique_id":null,' +
  '"name":"Activity #1","funding_status":"","cost_center":"","description":"","public_dashboard":false,"start_date":null,"end_date":null,' +
  '"create_date":"2018-05-22T12:09:30.434814+02:00","edit_date":"2018-05-22T12:09:30.434827+02:00","sort":0,' +
  '"organization":"https://dev.toladata.io/api/organization/1/","portfolio":null,"fund_code":[],"award":[],"sector":[],"sub_sector":[],' +
  '"country":[],"milestone":[],"user_access":["https://dev.toladata.io/api/tolauser/56/"]}';
const activityFixture1 = JSON.parse(fixture);
activityFixture1.name = 'Activity #1';
activityFixture1.id = 1;
const activityFixture2 = JSON.parse(fixture);
activityFixture2.name = 'Activity #2';
activityFixture2.id = 2;

describe('Activities Actions', () => {
  describe('LoadActivities Actions', () => {
    describe('LoadActivities', () => {
      it('should create an action', () => {
        const action = new fromActivities.LoadActivities();

        expect({ ...action }).toEqual({
          type: fromActivities.LOAD_ACTIVITIES,
        });
      });
    });

    describe('LoadActivitiesFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromActivities.LoadActivitiesFail(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.LOAD_ACTIVITIES_FAIL,
          payload,
        });
      });
    });

    describe('LoadActivitiesSuccess', () => {
      it('should create an action', () => {
        const payload = [
          activityFixture1,
          activityFixture2
        ];
        const action = new fromActivities.LoadActivitiesSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.LOAD_ACTIVITIES_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('CreateActivity Actions', () => {
    describe('CreateActivity', () => {
      it('should create an action', () => {
        const payload = activityFixture2;
        const action = new fromActivities.CreateActivity(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.CREATE_ACTIVITY,
          payload,
        });
      });
    });

    describe('CreateActivityFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new fromActivities.CreateActivityFail(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.CREATE_ACTIVITY_FAIL,
          payload,
        });
      });
    });

    describe('CreateActivitySuccess', () => {
      it('should create an action', () => {
        const payload = activityFixture2;
        const action = new fromActivities.CreateActivitySuccess(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.CREATE_ACTIVITY_SUCCESS,
          payload,
        });
      });
    });
  });

  describe('RemoveActivity Actions', () => {
    describe('RemoveActivity', () => {
      it('should create an action', () => {
        const payload = activityFixture2;
        const action = new fromActivities.RemoveActivity(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.REMOVE_ACTIVITY,
          payload,
        });
      });
    });

    describe('RemoveActivityFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Remove Error' };
        const action = new fromActivities.RemoveActivityFail(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.REMOVE_ACTIVITY_FAIL,
          payload,
        });
      });
    });

    describe('RemoveActivitySuccess', () => {
      it('should create an action', () => {
        const payload = activityFixture2;
        const action = new fromActivities.RemoveActivitySuccess(payload);

        expect({ ...action }).toEqual({
          type: fromActivities.REMOVE_ACTIVITY_SUCCESS,
          payload,
        });
      });
    });
  });
});
