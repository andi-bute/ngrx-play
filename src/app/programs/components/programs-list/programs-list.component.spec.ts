import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListComponent } from './programs-list.component';
import { ProgramActivitiesComponent } from '../program-activities/program-activities.component';
import { ProgramDetailsComponent } from '../program-details/program-details.component';
import { ActivityFormComponent } from '../activity-form/activity-form.component';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';
import { ProgramsRoutingModule } from '../../programs-routing.module';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '../../store';
import * as fromStore from '../../store';
import {
  MatExpansionModule,
  MatDividerModule,
  MatButtonModule,
  MatButton,
  MatButtonToggleModule
} from '@angular/material';
// import {
//   FormControl,
//   FormGroup,
//   FormArray,
//   FormBuilder,
//   Validators,
// } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ProgramsListComponent', () => {
  let component: ProgramsListComponent;
  let fixture: ComponentFixture<ProgramsListComponent>;
  let store: Store<fromStore.ProgramsState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramsListComponent,
        ProgramDetailsComponent,
        ProgramActivitiesComponent,
        ActivityFormComponent,
        ActivityDetailsComponent
      ],
      imports: [
        ProgramsRoutingModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatDividerModule,
        MatButtonModule,
        MatButtonToggleModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('programs', reducers),
        EffectsModule.forRoot(effects),
        EffectsModule.forFeature(effects),
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('store to be defined', async(() => { 
    expect(store).toBeDefined();
  }));

  it('data is there in component', async(() => {
    expect(component.programs$).toBeDefined();
  }));

  it('should show no data', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const el = compiled.querySelector('.programs-not-found');
     expect(el.textContent).toContain('No Programs');
  });
  // TODO: load mocked data to show the list
});
