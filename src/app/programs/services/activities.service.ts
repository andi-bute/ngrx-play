import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf,  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from '../models/activity.model';
import { BaseAPIUrl } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(`${BaseAPIUrl}api/workflowlevel2/`)
      .pipe(catchError((error: any) => throwError(error)));
  }
  createActivity(payload: Activity): Observable<Activity> {
    return this.http
      .post<Activity>(`${BaseAPIUrl}api/workflowlevel2/`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  updateActivity(payload: Activity, activityId): Observable<Activity> {
    return this.http
      .put<Activity>(`${BaseAPIUrl}api/workflowlevel2/${activityId}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  removeActivity(payload: Activity): Observable<Activity> {
    return this.http
      .delete<any>(`${BaseAPIUrl}api/workflowlevel2/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
