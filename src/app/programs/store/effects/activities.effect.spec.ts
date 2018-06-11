import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { empty } from 'rxjs';
import { of } from 'rxjs';

import { ActivitiesService } from '../../services/activities.service';
import * as fromEffects from './activities.effect';
import * as fromActions from '../actions/activities.action';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

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
const activityFixture3 = JSON.parse(fixture);
activityFixture3.name = 'Activity #3';
activityFixture3.id = 3;

describe('ActivitiesEffects', () => {
  let actions$: TestActions;
  let service: ActivitiesService;
  let effects: fromEffects.ActivitiesEffects;

  const activities = [
    activityFixture1,
    activityFixture2
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ActivitiesService,
        fromEffects.ActivitiesEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ActivitiesService);
    effects = TestBed.get(fromEffects.ActivitiesEffects);

    spyOn(service, 'getActivities').and.returnValue(of(activities));
    spyOn(service, 'createActivity').and.returnValue(of(activities[0]));
    spyOn(service, 'removeActivity').and.returnValue(of(activities[0]));
  });

  describe('loadActivities$', () => {
    it('should return a collection from LoadActivitiesSuccess', () => {
      const action = new fromActions.LoadActivities();
      const completion = new fromActions.LoadActivitiesSuccess(activities);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadActivities$).toBeObservable(expected);
    });
  });

  describe('createActivity$', () => {
    it('should work', () => {
      const action = new fromActions.CreateActivity(activities[0]);
      const completion = new fromActions.CreateActivitySuccess(activities[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createActivity$).toBeObservable(expected);
    });
  });

  describe('removeActivity$', () => {
    it('should work', () => {
      const action = new fromActions.RemoveActivity(activities[0]);
      const completion = new fromActions.RemoveActivitySuccess(activities[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.removeActivity$).toBeObservable(expected);
    });
  });
});
