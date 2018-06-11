import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Program } from '../../models/program.model';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  @Input('program')
  public program;

  constructor() {}

  ngOnInit() {
  }
}
