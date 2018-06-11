import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  @Input('activity')
  public activity;

  constructor() {}

  ngOnInit() {
  }
}
