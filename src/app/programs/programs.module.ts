import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramActivitiesComponent } from './program-activities/program-activities.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
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
  declarations: [ProgramsListComponent, ProgramDetailsComponent, ProgramActivitiesComponent]
})
export class ProgramsModule { }
