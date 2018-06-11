import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { ProgramActivitiesComponent } from './components/program-activities/program-activities.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramsGuard } from './guards/programs.guard';
import { ActivitiesGuard } from './guards/activities.guard';
import { reducers, effects } from './store';
import {
  MatExpansionModule,
  MatDividerModule,
  MatButtonModule,
  MatButton,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    MatExpansionModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    StoreModule.forFeature('programs', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [ProgramsGuard, ActivitiesGuard],
  declarations: [
    ProgramsListComponent,
    ProgramDetailsComponent,
    ProgramActivitiesComponent,
    ActivityDetailsComponent
  ]
})
export class ProgramsModule { }
