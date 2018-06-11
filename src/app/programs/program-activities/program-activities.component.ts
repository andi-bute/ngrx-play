import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

import { Program } from '../models/program.model';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'app-program-activities',
  templateUrl: './program-activities.component.html',
  styleUrls: ['program-activities.component.scss']
})
export class ProgramActivitiesComponent implements OnInit {
  program$: Observable<Program>;
  visualise: Program;
  activities: Activity[];

  constructor(private store: Store<fromStore.ProgramsState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadActivities());
    this.program$ = this.store.select(fromStore.getSelectedProgram);
  }
}
