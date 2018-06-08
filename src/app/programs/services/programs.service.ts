import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf,  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Program } from '../models/program.model';
import { BaseAPIUrl } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.http
      .get<Program[]>(`${BaseAPIUrl}api/workflowlevel1/`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
