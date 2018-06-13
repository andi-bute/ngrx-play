import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsListComponent } from './components/programs-list/programs-list.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { ProgramActivitiesComponent } from './components/program-activities/program-activities.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { localStorageSync } from 'ngrx-store-localstorage';
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

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {keys: ['programs', 'activities'],
     rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgramsRoutingModule,
    MatExpansionModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    StoreModule.forFeature('programs', reducers, {metaReducers}),
    EffectsModule.forFeature(effects)
  ],
  providers: [
    ProgramsGuard,
    ActivitiesGuard
  ],
  declarations: [
    ProgramsListComponent,
    ProgramDetailsComponent,
    ProgramActivitiesComponent,
    ActivityDetailsComponent,
    ActivityFormComponent
  ]
})
export class ProgramsModule { }
