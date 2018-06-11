import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListComponent } from './programs-list.component';
import { ProgramDetailsComponent } from '../program-details/program-details.component'
import { ProgramsRoutingModule } from '../programs-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '../store';
import {
  MatExpansionModule,
  MatDividerModule,
  MatButtonModule,
  MatButton,
  MatButtonToggleModule
} from '@angular/material';

describe('ProgramsListComponent', () => {
  let component: ProgramsListComponent;
  let fixture: ComponentFixture<ProgramsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramsListComponent,
        ProgramDetailsComponent
      ],
      imports: [
        ProgramsRoutingModule,
        MatExpansionModule,
        MatDividerModule,
        MatButtonModule,
        MatButtonToggleModule,
        StoreModule.forFeature('programs', reducers),
        EffectsModule.forFeature(effects)
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
