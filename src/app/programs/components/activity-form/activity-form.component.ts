import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Activity } from '../../models/activity.model';
import * as fromStore from '../../store';
import * as fromActivityActions from '../../store/actions/activities.action';
import * as fromActivitySelectors from '../../store/selectors/activities.selectors';
import * as fromRoot from '../../../store';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  activity$: Observable<Activity>;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.ProgramsState>,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.activity$ = this.store.select(fromActivitySelectors.getSelectedActivity);
    this.activity$.subscribe(
      (activity) => {
        this.form = this.fb.group({
          name: [activity.name, Validators.required],
          description: [activity.description, Validators.nullValidator],
          actualCost: [activity.actual_cost, Validators.required],
          actualStartDate: [activity.actual_start_date, Validators.required],
          actualEndDate: [activity.actual_end_date, Validators.required]
        });
      }
    );
  }

  onUpdateActivity(form) {
    const { value, valid } = form;
    if (valid) {
    this.store
      .select(fromRoot.getRouterState)
      .subscribe(routerState => {
        if (routerState.state.params.activityId === 'new') {
          this.store.dispatch(
            new fromActivityActions.CreateActivity(<Activity>value)
          );
        } else {
          alert(`Server can't do updates`);
          // this.store.dispatch(
          //   new fromStore.UpdateActivity(<Activity>value,
          //     routerState.state.params.activityId
          //   )
          // );
        }
      });
    }
  }
}
