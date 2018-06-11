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
}
